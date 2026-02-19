"use strict";
/**
 * ============================================================
 * WWebJS API - n8n Node
 * GERADO AUTOMATICAMENTE — não edite diretamente!
 *
 * Para regenerar: node scripts/generate-from-swagger.js
 * Swagger version: 1.0.0
 * API: WWebJS API
 * ============================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WWebjsApi = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class WWebjsApi {
    constructor() {
        this.description = {
            displayName: "WWebJS API",
            name: "wWebjsApi",
            icon: "file:wwebjs.svg",
            group: ["transform"],
            version: 1,
            subtitle: '={{$parameter["operation"]}}',
            description: "API wrapper for WhatsAppWebJS",
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
                        { name: "Client", value: "Client" },
                        { name: "Message", value: "Message" },
                        { name: "Session", value: "Session" },
                        { name: "Various", value: "Various" }
                    ],
                    default: "Client",
                },
                // ── Operations por Resource ───────────────────────────────
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Client"] } },
                    options: [
                        {
                            name: "Get connection info",
                            value: "getClassInfo",
                            description: "Get current connection information.",
                            action: "Get connection info",
                        },
                        {
                            name: "Accept group invite",
                            value: "acceptInvite",
                            description: "Accept an invitation to join a group.",
                            action: "Accept group invite",
                        },
                        {
                            name: "Archive chat",
                            value: "archiveChat",
                            description: "Archive the chat.",
                            action: "Archive chat",
                        },
                        {
                            name: "Create group",
                            value: "createGroup",
                            description: "Create a new group.",
                            action: "Create group",
                        },
                        {
                            name: "Get all chats",
                            value: "getChats",
                            description: "Get all chats.",
                            action: "Get all chats",
                        },
                        {
                            name: "Get all contacts",
                            value: "getContacts",
                            description: "Get all contacts.",
                            action: "Get all contacts",
                        },
                        {
                            name: "Get number ID",
                            value: "getNumberId",
                            description: "Get the WID of a phone number.",
                            action: "Get number ID",
                        },
                        {
                            name: "Send message",
                            value: "sendMessage",
                            description: "Send a text message.",
                            action: "Send message",
                        },
                        {
                            name: "Send media from URL",
                            value: "sendMediaUrl",
                            description: "Send media file from a URL.",
                            action: "Send media from URL",
                        },
                        {
                            name: "Set status message",
                            value: "setStatus",
                            description: "Set the client status message.",
                            action: "Set status message",
                        },
                        {
                            name: "Check if user is registered",
                            value: "isRegisteredUser",
                            description: "Check if phone number is registered on WhatsApp.",
                            action: "Check if user is registered",
                        },
                        {
                            name: "Get chat by ID",
                            value: "getChatById",
                            description: "Get chat details by chat ID.",
                            action: "Get chat by ID",
                        },
                        {
                            name: "Get contact by ID",
                            value: "getContactById",
                            description: "Get contact details by contact ID.",
                            action: "Get contact by ID",
                        }
                    ],
                    default: "getClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Message"] } },
                    options: [
                        {
                            name: "Get messages from chat",
                            value: "getMessages",
                            description: "Get messages from a specific chat.",
                            action: "Get messages from chat",
                        },
                        {
                            name: "Delete message",
                            value: "deleteMessage",
                            description: "Delete a message.",
                            action: "Delete message",
                        },
                        {
                            name: "React to message",
                            value: "reactToMessage",
                            description: "React to a message with an emoji.",
                            action: "React to message",
                        },
                        {
                            name: "Star message",
                            value: "starMessage",
                            description: "Star or unstar a message.",
                            action: "Star message",
                        }
                    ],
                    default: "getMessages",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Session"] } },
                    options: [
                        {
                            name: "Get all sessions",
                            value: "getSessions",
                            description: "Get all sessions.",
                            action: "Get all sessions",
                        },
                        {
                            name: "Start session",
                            value: "startSession",
                            description: "Starts a session for the given session ID.",
                            action: "Start session",
                        },
                        {
                            name: "Stop session",
                            value: "stopSession",
                            description: "Stops a session.",
                            action: "Stop session",
                        },
                        {
                            name: "Get session status",
                            value: "getSessionStatus",
                            description: "Status of the session.",
                            action: "Get session status",
                        },
                        {
                            name: "Get session QR code",
                            value: "getSessionQR",
                            description: "QR code data of the session.",
                            action: "Get session QR code",
                        },
                        {
                            name: "Get QR code as image",
                            value: "getSessionQRImage",
                            description: "QR code as PNG image.",
                            action: "Get QR code as image",
                        },
                        {
                            name: "Restart session",
                            value: "restartSession",
                            description: "Restarts the session.",
                            action: "Restart session",
                        },
                        {
                            name: "Terminate session",
                            value: "terminateSession",
                            description: "Terminates the session.",
                            action: "Terminate session",
                        },
                        {
                            name: "Terminate inactive sessions",
                            value: "terminateInactiveSessions",
                            description: "Terminates all inactive sessions.",
                            action: "Terminate inactive sessions",
                        },
                        {
                            name: "Terminate all sessions",
                            value: "terminateAllSessions",
                            description: "Terminates all sessions.",
                            action: "Terminate all sessions",
                        },
                        {
                            name: "Get page screenshot",
                            value: "getPageScreenshot",
                            description: "Screenshot of the client.",
                            action: "Get page screenshot",
                        },
                        {
                            name: "Request pairing code",
                            value: "requestPairingCode",
                            description: "Request authentication via pairing code.",
                            action: "Request pairing code",
                        }
                    ],
                    default: "getSessions",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Various"] } },
                    options: [
                        {
                            name: "Health check",
                            value: "ping",
                            description: "Responds with pong",
                            action: "Health check",
                        }
                    ],
                    default: "ping",
                },
                // ── Campos das Operações ──────────────────────────────────
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["startSession"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["stopSession"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionStatus"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionQR"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionQRImage"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["restartSession"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["terminateSession"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["getPageScreenshot"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Session"], operation: ["requestPairingCode"] } },
                },
                {
                    displayName: "PhoneNumber",
                    name: "body_phoneNumber",
                    type: "string",
                    default: "5511999999999",
                    required: false,
                    description: "Phone number in international format",
                    displayOptions: { show: { resource: ["Session"], operation: ["requestPairingCode"] } },
                },
                {
                    displayName: "ShowNotification",
                    name: "body_showNotification",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Show notification on phone",
                    displayOptions: { show: { resource: ["Session"], operation: ["requestPairingCode"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getClassInfo"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["acceptInvite"] } },
                },
                {
                    displayName: "InviteCode",
                    name: "body_inviteCode",
                    type: "string",
                    default: "ABC123",
                    required: false,
                    description: "Invitation code",
                    displayOptions: { show: { resource: ["Client"], operation: ["acceptInvite"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["archiveChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["archiveChat"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["createGroup"] } },
                },
                {
                    displayName: "Title",
                    name: "body_title",
                    type: "string",
                    default: "My Group",
                    required: true,
                    description: "Group title",
                    displayOptions: { show: { resource: ["Client"], operation: ["createGroup"] } },
                },
                {
                    displayName: "Participants",
                    name: "body_participants",
                    type: "string",
                    default: ["5511999999999@c.us"],
                    required: true,
                    description: "Array of participant IDs",
                    displayOptions: { show: { resource: ["Client"], operation: ["createGroup"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getChats"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getContacts"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getNumberId"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "5511999999999",
                    required: false,
                    description: "Phone number",
                    displayOptions: { show: { resource: ["Client"], operation: ["getNumberId"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID (phone@c.us or groupId@g.us)",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMessage"] } },
                },
                {
                    displayName: "Message",
                    name: "body_message",
                    type: "string",
                    default: "Hello World",
                    required: true,
                    description: "Text message content",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMessage"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Additional options",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMessage"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMediaUrl"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMediaUrl"] } },
                },
                {
                    displayName: "Url",
                    name: "body_url",
                    type: "string",
                    default: "https://example.com/image.jpg",
                    required: true,
                    description: "URL of the media",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMediaUrl"] } },
                },
                {
                    displayName: "Caption",
                    name: "body_caption",
                    type: "string",
                    default: "Check this out!",
                    required: false,
                    description: "Caption for the media",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMediaUrl"] } },
                },
                {
                    displayName: "Filename",
                    name: "body_filename",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Filename for the media",
                    displayOptions: { show: { resource: ["Client"], operation: ["sendMediaUrl"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["setStatus"] } },
                },
                {
                    displayName: "Status",
                    name: "body_status",
                    type: "string",
                    default: "Available",
                    required: false,
                    description: "Status message",
                    displayOptions: { show: { resource: ["Client"], operation: ["setStatus"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["isRegisteredUser"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "5511999999999",
                    required: false,
                    description: "Phone number to check",
                    displayOptions: { show: { resource: ["Client"], operation: ["isRegisteredUser"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getChatById"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: false,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["getChatById"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Client"], operation: ["getContactById"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: false,
                    description: "Contact ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["getContactById"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Message"], operation: ["getMessages"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["getMessages"] } },
                },
                {
                    displayName: "SearchOptions",
                    name: "body_searchOptions",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Search options (limit, fromMe, etc)",
                    displayOptions: { show: { resource: ["Message"], operation: ["getMessages"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Message"], operation: ["deleteMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["deleteMessage"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF123",
                    required: true,
                    description: "Message ID to delete",
                    displayOptions: { show: { resource: ["Message"], operation: ["deleteMessage"] } },
                },
                {
                    displayName: "Everyone",
                    name: "body_everyone",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Delete for everyone",
                    displayOptions: { show: { resource: ["Message"], operation: ["deleteMessage"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Message"], operation: ["reactToMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["reactToMessage"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF123",
                    required: true,
                    description: "Message ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["reactToMessage"] } },
                },
                {
                    displayName: "Reaction",
                    name: "body_reaction",
                    type: "string",
                    default: "👍",
                    required: true,
                    description: "Emoji reaction",
                    displayOptions: { show: { resource: ["Message"], operation: ["reactToMessage"] } },
                },
                {
                    displayName: "Session ID",
                    name: "sessionId",
                    type: "string",
                    default: "default",
                    required: true,
                    description: "Unique identifier for the session (alphanumeric and - allowed)",
                    displayOptions: { show: { resource: ["Message"], operation: ["starMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "5511999999999@c.us",
                    required: true,
                    description: "Chat ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["starMessage"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF123",
                    required: true,
                    description: "Message ID",
                    displayOptions: { show: { resource: ["Message"], operation: ["starMessage"] } },
                },
                {
                    displayName: "Star",
                    name: "body_star",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "True to star, false to unstar",
                    displayOptions: { show: { resource: ["Message"], operation: ["starMessage"] } },
                }
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials("wWebjsApiCredentials");
        const baseUrl = credentials.baseUrl.replace(/\/$/, "");
        const apiKey = credentials.apiKey;
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter("resource", i);
            const operation = this.getNodeParameter("operation", i);
            let responseData;
            try {
                switch (resource) {
                    case "Client": {
                        switch (operation) {
                            case "getClassInfo": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getClassInfo/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "acceptInvite": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/acceptInvite/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        inviteCode: this.getNodeParameter("body_inviteCode", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "archiveChat": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/archiveChat/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "createGroup": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/createGroup/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        title: this.getNodeParameter("body_title", i),
                                        participants: this.getNodeParameter("body_participants", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getChats": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getChats/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getContacts": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getContacts/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getNumberId": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getNumberId/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        number: this.getNodeParameter("body_number", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "sendMessage": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/sendMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        message: this.getNodeParameter("body_message", i),
                                        options: this.getNodeParameter("body_options", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "sendMediaUrl": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/sendMediaUrl/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        url: this.getNodeParameter("body_url", i),
                                        caption: this.getNodeParameter("body_caption", i),
                                        filename: this.getNodeParameter("body_filename", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "setStatus": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/setStatus/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        status: this.getNodeParameter("body_status", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "isRegisteredUser": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/isRegisteredUser/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        number: this.getNodeParameter("body_number", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getChatById": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getChatById/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getContactById": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/client/getContactById/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        contactId: this.getNodeParameter("body_contactId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    case "Message": {
                        switch (operation) {
                            case "getMessages": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/message/getMessages/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        searchOptions: this.getNodeParameter("body_searchOptions", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "deleteMessage": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/message/deleteMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        everyone: this.getNodeParameter("body_everyone", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "reactToMessage": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/message/reactToMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        reaction: this.getNodeParameter("body_reaction", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "starMessage": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/message/starMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        star: this.getNodeParameter("body_star", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    case "Session": {
                        switch (operation) {
                            case "getSessions": {
                                const endpoint = `/session/getSessions`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "startSession": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/start/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "stopSession": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/stop/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getSessionStatus": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/status/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getSessionQR": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/qr/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getSessionQRImage": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/qr/${sessionId}/image`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "restartSession": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/restart/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "terminateSession": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/terminate/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "terminateInactiveSessions": {
                                const endpoint = `/session/terminateInactive`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "terminateAllSessions": {
                                const endpoint = `/session/terminateAll`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "getPageScreenshot": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/getPageScreenshot/${sessionId}`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "requestPairingCode": {
                                const sessionId = this.getNodeParameter("sessionId", i);
                                const endpoint = `/session/requestPairingCode/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        phoneNumber: this.getNodeParameter("body_phoneNumber", i),
                                        showNotification: this.getNodeParameter("body_showNotification", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    case "Various": {
                        switch (operation) {
                            case "ping": {
                                const endpoint = `/ping`;
                                const options = {
                                    method: "GET",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    default:
                        throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Resource não suportado: ${resource}`);
                }
                returnData.push({ json: responseData !== null && responseData !== void 0 ? responseData : {}, pairedItem: { item: i } });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.WWebjsApi = WWebjsApi;
//# sourceMappingURL=WWebjsApi.node.js.map