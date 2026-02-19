"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WWebjsApiCredentials = void 0;
class WWebjsApiCredentials {
    constructor() {
        this.name = "wWebjsApiCredentials";
        this.displayName = "WWebJS API Credentials";
        this.documentationUrl = "https://github.com/avoylenko/wwebjs-api";
        this.properties = [
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
        this.authenticate = {
            type: "generic",
            properties: { headers: { "x-api-key": "={{$credentials.apiKey}}" } },
        };
    }
}
exports.WWebjsApiCredentials = WWebjsApiCredentials;
//# sourceMappingURL=WWebjsApiCredentials.credentials.js.map