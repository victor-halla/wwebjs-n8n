import { ICredentialType, INodeProperties } from "n8n-workflow";

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
