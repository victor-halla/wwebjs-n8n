import { ICredentialType, INodeProperties } from "n8n-workflow";
export declare class WWebjsApiCredentials implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: {
        type: "generic";
        properties: {
            headers: {
                "x-api-key": string;
            };
        };
    };
}
//# sourceMappingURL=WWebjsApiCredentials.credentials.d.ts.map