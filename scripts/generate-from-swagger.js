#!/usr/bin/env node
/**
 * WWebJS API - n8n Node Generator
 * Para atualizar: bash scripts/update-swagger.sh && npm publish
 */

const fs   = require('fs');
const path = require('path');

const swaggerPath = path.join(__dirname, '..', 'swagger.json');
if (!fs.existsSync(swaggerPath)) { console.error('swagger.json não encontrado'); process.exit(1); }
const swagger = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

// ── Helpers ──────────────────────────────────────────────────
function s(str)     { return JSON.stringify(String(str == null ? '' : str)); }
function sLine(str) { return JSON.stringify(String(str == null ? '' : str).replace(/[\r\n]+/g, ' ').trim()); }
function sDefault(example, t) {
  if (example !== '' && example !== undefined && example !== null) return JSON.stringify(example);
  return t === 'boolean' ? 'false' : t === 'number' ? '0' : '""';
}
function toCamelCase(str) { return str.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase()); }
function toPascalCase(str) { const c = toCamelCase(str); return c.charAt(0).toUpperCase() + c.slice(1); }
function toOperationId(method, routePath) {
  const clean = routePath.replace(/^\//, '').replace(/\{[^}]+\}/g, '').replace(/\/+/g, '_').replace(/_+$/, '');
  return toCamelCase(`${method}_${clean}`);
}
function getTag(op)           { return (op.tags && op.tags[0]) || 'Various'; }
function buildResourceName(t) { return toPascalCase(t.toLowerCase().replace(/\s+/g, '_')); }

function n8nType(swType, isObjOrArray) {
  if (isObjOrArray) return 'string'; // object/array → JSON string input
  if (swType === 'boolean') return 'boolean';
  if (swType === 'number' || swType === 'integer') return 'number';
  return 'string';
}

// ── Detectar enum — cobre todos os formatos OpenAPI ──────────
function extractEnum(prop) {
  // 1. enum explícito
  if (prop.enum && prop.enum.length > 0) return prop.enum;
  // 2. x-enum
  if (prop['x-enum'] && prop['x-enum'].length > 0) return prop['x-enum'];
  // 3. examples com múltiplas chaves
  if (prop.examples && typeof prop.examples === 'object') {
    const keys = Object.keys(prop.examples);
    if (keys.length > 1) return keys;
  }
  // 4. oneOf com const
  if (prop.oneOf && prop.oneOf.length > 0) {
    const vals = prop.oneOf.map(s => s.const || (s.enum && s.enum[0])).filter(Boolean);
    if (vals.length > 1) return vals;
  }
  // 5. Extrair de description: "must be one of the following: X, Y, Z"
  if (prop.description) {
    const match = prop.description.match(/one\s+of(?:\s+the\s+following)?[:\s]+([^.]+)/i);
    if (match) {
      const vals = match[1].split(/[,\s]+(?:or\s+)?/)
        .map(v => v.trim().replace(/['"]/g, ''))
        .filter(v => v && v.length > 1 && !['or','and','the','a','an'].includes(v.toLowerCase()));
      if (vals.length > 1) return vals;
    }
  }
  return null;
}

// ── Parse swagger ─────────────────────────────────────────────
const operations = [];
const resourceMap = {};

for (const [routePath, methods] of Object.entries(swagger.paths || {})) {
  for (const [httpMethod, operation] of Object.entries(methods)) {
    if (!['get','post','put','patch','delete'].includes(httpMethod)) continue;
    const tag         = getTag(operation);
    const operationId = operation.operationId || toOperationId(httpMethod, routePath);
    const summary     = operation.summary     || operationId;
    const description = operation.description || summary;
    const pathParams  = (operation.parameters || []).filter(p => p.in === 'path');
    const queryParams = (operation.parameters || []).filter(p => p.in === 'query');

    let bodyProps = [];
    if (operation.requestBody) {
      const content     = operation.requestBody.content || {};
      const jsonContent = content['application/json'] || content['application/xml'] || {};
      const schema      = jsonContent.schema || {};
      const props       = schema.properties || {};
      const required    = schema.required   || [];

      bodyProps = Object.entries(props).map(([name, prop]) => {
        const isObjOrArray = prop.type === 'object' || prop.type === 'array';
        const detectedEnum = extractEnum(prop);
        return {
          name,
          type:          prop.type || 'string',
          isObjOrArray,
          description:   prop.description || '',
          example:       prop.example !== undefined ? prop.example : '',
          required:      required.includes(name),
          enum:          detectedEnum,
        };
      });
    }

    const op = {
      tag, operationId, summary, description,
      httpMethod: httpMethod.toUpperCase(),
      routePath, pathParams, queryParams, bodyProps,
      hasSessionId: pathParams.some(p => p.name === 'sessionId'),
    };
    operations.push(op);
    if (!resourceMap[tag]) resourceMap[tag] = [];
    resourceMap[tag].push(op);
  }
}

const resources = Object.keys(resourceMap).sort();

// ── Campo sessionId ───────────────────────────────────────────
function buildSessionIdField(resource, opId) {
  return `    {
      displayName: "Session",
      name: "sessionId",
      type: "resourceLocator",
      default: { mode: "id", value: "default" },
      required: true,
      description: "WhatsApp session to use",
      modes: [
        {
          displayName: "From List",
          name: "list",
          type: "list",
          typeOptions: { searchListMethod: "getSessions", searchable: false },
        },
        {
          displayName: "By ID",
          name: "id",
          type: "string",
          placeholder: "e.g. default",
        },
      ],
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`;
}

function buildFieldsForOperation(op) {
  const fields   = [];
  const resource = buildResourceName(op.tag);
  const opId     = op.operationId;

  if (op.hasSessionId) fields.push(buildSessionIdField(resource, opId));

  for (const p of op.pathParams.filter(p => p.name !== 'sessionId')) {
    fields.push(`    {
      displayName: ${s(toPascalCase(p.name))},
      name: ${s(p.name)},
      type: "string",
      default: ${s(p.example || '')},
      required: ${p.required !== false},
      description: ${sLine(p.description || '')},
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`);
  }

  for (const p of op.queryParams) {
    const t      = n8nType(p.schema && p.schema.type, false);
    const defVal = p.schema && p.schema.default !== undefined
      ? JSON.stringify(p.schema.default)
      : (t === 'boolean' ? 'false' : t === 'number' ? '0' : '""');
    fields.push(`    {
      displayName: ${s(toPascalCase(p.name))},
      name: ${s(p.name)},
      type: "${t}",
      default: ${defVal},
      required: ${p.required === true},
      description: ${sLine(p.description || '')},
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`);
  }

  for (const p of op.bodyProps) {
    const hasEnum   = p.enum && p.enum.length > 0;
    const t         = hasEnum ? 'options' : n8nType(p.type, p.isObjOrArray);
    const defVal    = hasEnum
      ? s(String(p.enum[0]))
      : p.isObjOrArray
        ? '"{}"'
        : sDefault(p.example, n8nType(p.type, false));

    const enumBlock = hasEnum
      ? `\n      options: [\n${p.enum.map(e => `        { name: ${s(String(e))}, value: ${s(String(e))} }`).join(',\n')}\n      ],`
      : '';

    // Hint para campos JSON
    const jsonHint  = p.isObjOrArray && !hasEnum
      ? `\n      typeOptions: { rows: 2 },\n      hint: "Enter as JSON",`
      : '';

    fields.push(`    {
      displayName: ${s(toPascalCase(p.name))},
      name: ${s('body_' + p.name)},
      type: "${t}",
      default: ${defVal},
      required: ${p.required},
      description: ${sLine(p.description || '')},${enumBlock}${jsonHint}
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`);
  }

  return fields;
}

// ── Geração do TS ─────────────────────────────────────────────
function generateNodeCode() {
  const resourceOptions = resources.map(r =>
    `      { name: ${s(r)}, value: ${s(buildResourceName(r))} }`
  ).join(',\n');

  const operationFields = resources.map(tag => {
    const ops       = resourceMap[tag];
    const opOptions = ops.map(op =>
      `        { name: ${sLine(op.summary)}, value: ${s(op.operationId)}, description: ${sLine(op.description)}, action: ${sLine(op.summary)} }`
    ).join(',\n');
    return `    {
      displayName: "Operation",
      name: "operation",
      type: "options",
      noDataExpression: true,
      displayOptions: { show: { resource: [${s(buildResourceName(tag))}] } },
      options: [\n${opOptions}\n      ],
      default: ${s(ops[0] && ops[0].operationId || '')},
    }`;
  }).join(',\n\n');

  const allFields = operations.flatMap(op => buildFieldsForOperation(op));

  // execute(): campos object/array são JSON.parsed antes de enviar
  const executeCases = resources.map(tag => {
    const ops     = resourceMap[tag];
    const opCases = ops.map(op => {
      const pathParamLines = op.pathParams.map(p => {
        if (p.name === 'sessionId') {
          return `          const sessionIdParam = this.getNodeParameter("sessionId", i) as { mode: string; value: string };
          const sessionId = sessionIdParam.value || "default";`;
        }
        return `          const ${p.name} = this.getNodeParameter(${s(p.name)}, i) as string;`;
      }).join('\n');

      const builtPath = op.routePath.replace(/\{([^}]+)\}/g, '${$1}');
      const hasBody   = op.bodyProps.length > 0;

      const bodyLines = op.bodyProps.map(p => {
        if (p.isObjOrArray && !(p.enum && p.enum.length)) {
          // Parse JSON string → object
          return `            ${p.name}: (() => { try { return JSON.parse(this.getNodeParameter(${s('body_' + p.name)}, i) as string); } catch { return {}; } })(),`;
        }
        const cast = p.type === 'boolean' ? 'boolean' : (p.type === 'number' || p.type === 'integer') ? 'number' : 'string';
        return `            ${p.name}: this.getNodeParameter(${s('body_' + p.name)}, i) as ${cast},`;
      }).join('\n');

      const queryLines = op.queryParams.map(p =>
        `            ${p.name}: this.getNodeParameter(${s(p.name)}, i),`
      ).join('\n');

      return `        case ${s(op.operationId)}: {
${pathParamLines}
          const endpoint = \`${builtPath}\`;
          const options: IHttpRequestOptions = {
            method: "${op.httpMethod}",
            url: \`\${baseUrl}\${endpoint}\`,
            headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
            ${hasBody ? `body: {\n${bodyLines}\n            },` : ''}
            ${op.queryParams.length > 0 ? `qs: {\n${queryLines}\n            },` : ''}
            returnFullResponse: false,
            json: true,
          };
          responseData = await this.helpers.httpRequest(options);
          break;
        }`;
    }).join('\n');

    return `      case ${s(buildResourceName(tag))}: {
        switch (operation) {
${opCases}
          default:
            throw new NodeOperationError(this.getNode(), \`Operação não suportada: \${operation}\`);
        }
        break;
      }`;
  }).join('\n');

  const apiDesc  = sLine((swagger.info && swagger.info.description) || 'WhatsApp Web JS API integration');
  const apiVer   = (swagger.info && swagger.info.version)           || 'unknown';
  const apiTitle = (swagger.info && swagger.info.title)             || 'WWebJS API';
  const firstRes = s(buildResourceName(resources[0]) || '');

  return `/**
 * WWebJS API - n8n Node — GERADO AUTOMATICAMENTE
 * Swagger: ${apiVer} | ${apiTitle}
 * Para regenerar: node scripts/generate-from-swagger.js
 */

import {
  IExecuteFunctions,
  IHttpRequestOptions,
  ILoadOptionsFunctions,
  INodeExecutionData,
  INodeListSearchResult,
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
} from "n8n-workflow";

export class WWebjsApi implements INodeType {
  description: INodeTypeDescription = {
    displayName: "WWebJS API",
    name: "wWebjsApi",
    icon: "file:wwebjs.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"]}}',
    description: ${apiDesc},
    defaults: { name: "WWebJS API" },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [{ name: "wWebjsApiCredentials", required: true }],
    properties: [
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        noDataExpression: true,
        options: [
${resourceOptions}
        ],
        default: ${firstRes},
      },

${operationFields},

${allFields.join(',\n')}
    ],
  };

  methods = {
    listSearch: {
      async getSessions(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const credentials = await this.getCredentials("wWebjsApiCredentials");
        const baseUrl = (credentials.baseUrl as string).replace(/\\/$/, "");
        const apiKey  = credentials.apiKey as string;
        try {
          const response = await this.helpers.httpRequest({
            method: "GET",
            url: \`\${baseUrl}/session/getSessions\`,
            headers: { "x-api-key": apiKey },
            json: true,
          }) as any;

          // Formatos possíveis:
          // 1. [{ success: true, result: ["wa123", "wa456"] }]  ← formato atual
          // 2. { success: true, result: ["wa123"] }
          // 3. ["wa123", "wa456"]
          let sessions: string[] = [];
          if (Array.isArray(response)) {
            const first = response[0];
            if (first && Array.isArray(first.result)) {
              sessions = first.result;
            } else if (typeof first === 'string') {
              sessions = response;
            }
          } else if (response && Array.isArray(response.result)) {
            sessions = response.result;
          }

          if (!sessions.length) {
            return { results: [{ name: "default (no active sessions)", value: "default" }] };
          }
          return {
            results: sessions.map((id: string) => ({ name: id, value: id })),
          };
        } catch {
          return { results: [{ name: "default", value: "default" }] };
        }
      },
    },
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items      = this.getInputData();
    const returnData: INodeExecutionData[] = [];
    const credentials = await this.getCredentials("wWebjsApiCredentials");
    const baseUrl    = (credentials.baseUrl as string).replace(/\\/$/, "");
    const apiKey     = credentials.apiKey as string;

    for (let i = 0; i < items.length; i++) {
      const resource  = this.getNodeParameter("resource", i) as string;
      const operation = this.getNodeParameter("operation", i) as string;
      let responseData: any;

      try {
        switch (resource) {
${executeCases}
          default:
            throw new NodeOperationError(this.getNode(), \`Resource não suportado: \${resource}\`);
        }
        returnData.push({ json: responseData ?? {}, pairedItem: { item: i } });
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({ json: { error: (error as Error).message }, pairedItem: { item: i } });
          continue;
        }
        throw error;
      }
    }
    return [returnData];
  }
}
`;
}

function generateCredentials() {
  return `import { ICredentialType, INodeProperties } from "n8n-workflow";

export class WWebjsApiCredentials implements ICredentialType {
  name = "wWebjsApiCredentials";
  displayName = "WWebJS API Credentials";
  documentationUrl = "https://github.com/avoylenko/wwebjs-api";
  properties: INodeProperties[] = [
    {
      displayName: "Base URL",
      name: "baseUrl",
      type: "string",
      default: "http://localhost:3000",
      required: true,
      description: "URL base da API WWebJS (ex: http://localhost:3000)",
    },
    {
      displayName: "API Key",
      name: "apiKey",
      type: "string",
      typeOptions: { password: true },
      default: "",
      required: true,
      description: "Chave de API (variável API_KEY no servidor WWebJS)",
    },
  ];
  authenticate = {
    type: "generic" as const,
    properties: { headers: { "x-api-key": "={{$credentials.apiKey}}" } },
  };
}
`;
}

function generateIndex() {
  return `export { WWebjsApi as default } from "./nodes/WWebjsApi/WWebjsApi.node";
export { WWebjsApiCredentials } from "./credentials/WWebjsApiCredentials.credentials";
`;
}

// ── Salvar ────────────────────────────────────────────────────
const outDir   = path.join(__dirname, '..');
const nodesDir = path.join(outDir, 'nodes', 'WWebjsApi');
const credDir  = path.join(outDir, 'credentials');
fs.mkdirSync(nodesDir, { recursive: true });
fs.mkdirSync(credDir,  { recursive: true });

fs.writeFileSync(path.join(nodesDir, 'WWebjsApi.node.ts'), generateNodeCode(), 'utf8');
console.log('✅ Gerado: nodes/WWebjsApi/WWebjsApi.node.ts');
fs.writeFileSync(path.join(credDir, 'WWebjsApiCredentials.credentials.ts'), generateCredentials(), 'utf8');
console.log('✅ Gerado: credentials/WWebjsApiCredentials.credentials.ts');
fs.writeFileSync(path.join(outDir, 'index.ts'), generateIndex(), 'utf8');
console.log('✅ Gerado: index.ts');

let enumCount = 0, objCount = 0;
operations.forEach(op => op.bodyProps.forEach(p => {
  if (p.enum) enumCount++;
  if (p.isObjOrArray && !p.enum) objCount++;
}));
console.log('\n📊 Resumo:');
console.log(`   Resources: ${resources.length} (${resources.join(', ')})`);
console.log(`   Operações: ${operations.length}`);
resources.forEach(r => console.log(`   - ${r}: ${resourceMap[r].length} operações`));
console.log(`   Campos com dropdown (enum): ${enumCount}`);
console.log(`   Campos JSON (object/array): ${objCount}`);
console.log('\n🚀 Para compilar: npm run build');
console.log('📦 Para publicar: npm publish');
