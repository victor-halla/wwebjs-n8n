#!/usr/bin/env node
/**
 * ============================================================
 * WWebJS API - n8n Node Generator
 * ============================================================
 * Este script lê o swagger.json da WWebJS API e gera
 * automaticamente o código TypeScript do node n8n.
 *
 * Para atualizar para uma nova versão da API:
 *   1. Atualize o arquivo swagger.json (ou rode update-swagger.sh)
 *   2. Execute: node scripts/generate-from-swagger.js
 *   3. Execute: npm run build
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

// Carrega o swagger
const swaggerPath = path.join(__dirname, '..', 'swagger.json');
if (!fs.existsSync(swaggerPath)) {
  console.error('swagger.json não encontrado em:', swaggerPath);
  process.exit(1);
}
const swagger = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

// ============================================================
// HELPERS DE ESCAPE — usa JSON.stringify para máxima segurança
// Garante escape correto de: apóstrofos, aspas, \n, unicode, etc.
// ============================================================

/** Serializa string para literal TS seguro (aspas duplas) */
function s(str) {
  return JSON.stringify(String(str == null ? '' : str));
}

/** Igual ao s() mas remove quebras de linha — para labels/descriptions inline */
function sLine(str) {
  return JSON.stringify(String(str == null ? '' : str).replace(/[\r\n]+/g, ' ').trim());
}

/** Serializa valor de exemplo de acordo com o tipo */
function sDefault(example, n8nType) {
  if (example !== '' && example !== undefined && example !== null) {
    return JSON.stringify(example);
  }
  if (n8nType === 'boolean') return 'false';
  if (n8nType === 'number') return '0';
  return '""';
}

function toCamelCase(str) {
  return str.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase());
}

function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function toOperationId(method, routePath) {
  const cleanPath = routePath
    .replace(/^\//, '')
    .replace(/\{[^}]+\}/g, '')
    .replace(/\/+/g, '_')
    .replace(/_+$/, '');
  return toCamelCase(`${method}_${cleanPath}`);
}

function getTag(operation) {
  return (operation.tags && operation.tags[0]) || 'Various';
}

function buildResourceName(tag) {
  return toPascalCase(tag.toLowerCase().replace(/\s+/g, '_'));
}

// ============================================================
// PARSE DO SWAGGER
// ============================================================

const operations = [];
const resourceMap = {};

for (const [routePath, methods] of Object.entries(swagger.paths || {})) {
  for (const [httpMethod, operation] of Object.entries(methods)) {
    if (!['get', 'post', 'put', 'patch', 'delete'].includes(httpMethod)) continue;

    const tag = getTag(operation);
    const operationId = operation.operationId || toOperationId(httpMethod, routePath);
    const summary = operation.summary || operationId;
    const description = operation.description || summary;

    const pathParams = (operation.parameters || []).filter(p => p.in === 'path');
    const queryParams = (operation.parameters || []).filter(p => p.in === 'query');

    let bodyProps = [];
    if (operation.requestBody) {
      const content = operation.requestBody.content || {};
      const jsonContent = content['application/json'] || content['application/xml'] || {};
      const schema = jsonContent.schema || {};
      const props = schema.properties || {};
      const required = schema.required || [];
      bodyProps = Object.entries(props).map(([name, prop]) => ({
        name,
        type: prop.type || 'string',
        description: prop.description || '',
        example: prop.example !== undefined ? prop.example : '',
        required: required.includes(name),
        enum: prop.enum,
      }));
    }

    const op = {
      tag,
      operationId,
      summary,
      description,
      httpMethod: httpMethod.toUpperCase(),
      routePath,
      pathParams,
      queryParams,
      bodyProps,
      hasSessionId: pathParams.some(p => p.name === 'sessionId'),
    };

    operations.push(op);
    if (!resourceMap[tag]) resourceMap[tag] = [];
    resourceMap[tag].push(op);
  }
}

const resources = Object.keys(resourceMap).sort();

// ============================================================
// GERAÇÃO DOS CAMPOS DO NODE
// ============================================================

function n8nType(swType) {
  if (swType === 'boolean') return 'boolean';
  if (swType === 'number' || swType === 'integer') return 'number';
  return 'string';
}

function buildFieldsForOperation(op) {
  const fields = [];
  const resource = buildResourceName(op.tag);
  const opId = op.operationId;

  // sessionId
  if (op.hasSessionId) {
    fields.push(`    {
      displayName: "Session ID",
      name: "sessionId",
      type: "string",
      default: "default",
      required: true,
      description: "Unique identifier for the session (alphanumeric and - allowed)",
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`);
  }

  // Path params (exceto sessionId)
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

  // Query params
  for (const p of op.queryParams) {
    const t = n8nType(p.schema && p.schema.type);
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

  // Body props
  for (const p of op.bodyProps) {
    const t = p.enum ? 'options' : n8nType(p.type);
    const defVal = sDefault(p.example, n8nType(p.type));
    const enumOptions = p.enum
      ? `\n      options: ${JSON.stringify(p.enum.map(e => ({ name: String(e), value: e })))},`
      : '';
    fields.push(`    {
      displayName: ${s(toPascalCase(p.name))},
      name: ${s('body_' + p.name)},
      type: "${t}",
      default: ${defVal},
      required: ${p.required},
      description: ${sLine(p.description || '')},${enumOptions}
      displayOptions: { show: { resource: [${s(resource)}], operation: [${s(opId)}] } },
    }`);
  }

  return fields;
}

// ============================================================
// GERAÇÃO DO CÓDIGO TS PRINCIPAL
// ============================================================

function generateNodeCode() {
  // Resource options
  const resourceOptions = resources.map(r =>
    `      { name: ${s(r)}, value: ${s(buildResourceName(r))} }`
  ).join(',\n');

  // Operation fields por resource
  const operationFields = resources.map(tag => {
    const ops = resourceMap[tag];
    const opOptions = ops.map(op =>
      `        {\n          name: ${sLine(op.summary)},\n          value: ${s(op.operationId)},\n          description: ${sLine(op.description)},\n          action: ${sLine(op.summary)},\n        }`
    ).join(',\n');
    return `    {
      displayName: "Operation",
      name: "operation",
      type: "options",
      noDataExpression: true,
      displayOptions: { show: { resource: [${s(buildResourceName(tag))}] } },
      options: [
${opOptions}
      ],
      default: ${s(ops[0] && ops[0].operationId || '')},
    }`;
  }).join(',\n\n');

  // Campos de todas as operações
  const allFields = operations.flatMap(op => buildFieldsForOperation(op));

  // Execute — switch/case por resource e operation
  const executeCases = resources.map(tag => {
    const ops = resourceMap[tag];
    const opCases = ops.map(op => {
      const pathParamLines = op.pathParams.map(p => {
        if (p.name === 'sessionId') {
          return `          const sessionId = this.getNodeParameter("sessionId", i) as string;`;
        }
        return `          const ${p.name} = this.getNodeParameter(${s(p.name)}, i) as string;`;
      }).join('\n');

      const builtPath = op.routePath.replace(/\{([^}]+)\}/g, '${$1}');
      const hasBody = op.bodyProps.length > 0;
      const bodyLines = op.bodyProps.map(p => {
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

  const apiDesc = sLine(swagger.info && swagger.info.description || 'WhatsApp Web JS API integration');
  const apiVersion = (swagger.info && swagger.info.version) || 'unknown';
  const apiTitle = (swagger.info && swagger.info.title) || 'WWebJS API';
  const firstResource = s(buildResourceName(resources[0]) || '');

  return `/**
 * ============================================================
 * WWebJS API - n8n Node
 * GERADO AUTOMATICAMENTE — não edite diretamente!
 *
 * Para regenerar: node scripts/generate-from-swagger.js
 * Swagger version: ${apiVersion}
 * API: ${apiTitle}
 * ============================================================
 */

import {
  IExecuteFunctions,
  IHttpRequestOptions,
  INodeExecutionData,
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
      // ── Resource ─────────────────────────────────────────────
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        noDataExpression: true,
        options: [
${resourceOptions}
        ],
        default: ${firstResource},
      },

      // ── Operations por Resource ───────────────────────────────
${operationFields},

      // ── Campos das Operações ──────────────────────────────────
${allFields.join(',\n')}
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    const credentials = await this.getCredentials("wWebjsApiCredentials");
    const baseUrl = (credentials.baseUrl as string).replace(/\\/$/, "");
    const apiKey = credentials.apiKey as string;

    for (let i = 0; i < items.length; i++) {
      const resource = this.getNodeParameter("resource", i) as string;
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

// ============================================================
// CREDENTIALS
// ============================================================

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
      description: "Chave de API configurada no servidor WWebJS (variável API_KEY)",
    },
  ];

  authenticate = {
    type: "generic" as const,
    properties: {
      headers: { "x-api-key": "={{$credentials.apiKey}}" },
    },
  };
}
`;
}

// ============================================================
// INDEX
// ============================================================

function generateIndex() {
  return `export { WWebjsApi as default } from "./nodes/WWebjsApi/WWebjsApi.node";
export { WWebjsApiCredentials } from "./credentials/WWebjsApiCredentials.credentials";
`;
}

// ============================================================
// SALVAR ARQUIVOS
// ============================================================

const outDir = path.join(__dirname, '..');
const nodesDir = path.join(outDir, 'nodes', 'WWebjsApi');
const credDir = path.join(outDir, 'credentials');

fs.mkdirSync(nodesDir, { recursive: true });
fs.mkdirSync(credDir, { recursive: true });

fs.writeFileSync(path.join(nodesDir, 'WWebjsApi.node.ts'), generateNodeCode(), 'utf8');
console.log('✅ Gerado: nodes/WWebjsApi/WWebjsApi.node.ts');

fs.writeFileSync(path.join(credDir, 'WWebjsApiCredentials.credentials.ts'), generateCredentials(), 'utf8');
console.log('✅ Gerado: credentials/WWebjsApiCredentials.credentials.ts');

fs.writeFileSync(path.join(outDir, 'index.ts'), generateIndex(), 'utf8');
console.log('✅ Gerado: index.ts');

console.log('\n📊 Resumo:');
console.log(`   Resources: ${resources.length} (${resources.join(', ')})`);
console.log(`   Operações: ${operations.length}`);
resources.forEach(r => console.log(`   - ${r}: ${resourceMap[r].length} operações`));
console.log('\n🚀 Para compilar: npm run build');
console.log('📦 Para publicar: npm publish');
