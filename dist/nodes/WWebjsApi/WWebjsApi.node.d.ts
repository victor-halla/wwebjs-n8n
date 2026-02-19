/**
 * WWebJS API - n8n Node — GERADO AUTOMATICAMENTE
 * Swagger: 1.0.0 | WWebJS API
 * Para regenerar: node scripts/generate-from-swagger.js
 */
import { IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeType, INodeTypeDescription } from "n8n-workflow";
export declare class WWebjsApi implements INodeType {
    description: INodeTypeDescription;
    methods: {
        listSearch: {
            getSessions(this: ILoadOptionsFunctions): Promise<INodeListSearchResult>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
//# sourceMappingURL=WWebjsApi.node.d.ts.map