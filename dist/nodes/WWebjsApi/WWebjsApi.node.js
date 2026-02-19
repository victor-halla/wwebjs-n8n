"use strict";
/**
 * WWebJS API - n8n Node — GERADO AUTOMATICAMENTE
 * Swagger: 1.0.0 | WWebJS API
 * Para regenerar: node scripts/generate-from-swagger.js
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
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    noDataExpression: true,
                    options: [
                        { name: "Channel Chat", value: "ChannelChat" },
                        { name: "Chat", value: "Chat" },
                        { name: "Client", value: "Client" },
                        { name: "Contact", value: "Contact" },
                        { name: "Group Chat", value: "GroupChat" },
                        { name: "Message", value: "Message" },
                        { name: "Session", value: "Session" },
                        { name: "Various", value: "Various" }
                    ],
                    default: "ChannelChat",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["ChannelChat"] } },
                    options: [
                        { name: "Get the channel", value: "postChannelGetClassInfo", description: "Get the channel", action: "Get the channel" },
                        { name: "Sends a message to this channel", value: "postChannelSendMessage", description: "Sends a message to this channel", action: "Sends a message to this channel" },
                        { name: "Load channel messages", value: "postChannelFetchMessages", description: "Messages sorted from earliest to latest", action: "Load channel messages" },
                        { name: "Send seen status to the channel", value: "postChannelSendSeen", description: "Send seen status to the channel", action: "Send seen status to the channel" },
                        { name: "Mute the channel", value: "postChannelMute", description: "Mute the channel", action: "Mute the channel" },
                        { name: "Unmute the channel", value: "postChannelUnmute", description: "Unmute the channel", action: "Unmute the channel" },
                        { name: "Accept channel admin invite", value: "postChannelAcceptChannelAdminInvite", description: "Accept channel admin invite", action: "Accept channel admin invite" },
                        { name: "Sends a channel admin invitation to a user", value: "postChannelSendChannelAdminInvite", description: "Sends a channel admin invitation to a user", action: "Sends a channel admin invitation to a user" },
                        { name: "Revokes a channel admin invitation sent to a user by a channel owner", value: "postChannelRevokeChannelAdminInvite", description: "Revokes a channel admin invitation sent to a user by a channel owner", action: "Revokes a channel admin invitation sent to a user by a channel owner" },
                        { name: "Transfers a channel ownership to another user", value: "postChannelTransferChannelOwnership", description: "Note: the user you are transferring the channel ownership to must be a channel admin", action: "Transfers a channel ownership to another user" },
                        { name: "Demotes a channel admin to a regular subscriber", value: "postChannelDemoteChannelAdmin", description: "Demotes a channel admin to a regular subscriber", action: "Demotes a channel admin to a regular subscriber" },
                        { name: "Gets the subscribers of the channel (only those who are in your contact list)", value: "postChannelGetSubscribers", description: "Gets the subscribers of the channel (only those who are in your contact list)", action: "Gets the subscribers of the channel (only those who are in your contact list)" },
                        { name: "Update a channel profile picture", value: "postChannelSetProfilePicture", description: "Update a channel profile picture", action: "Update a channel profile picture" },
                        { name: "Update a channel description", value: "postChannelSetDescription", description: "Update a channel description", action: "Update a channel description" },
                        { name: "Set the subject of the channel", value: "postChannelSetSubject", description: "Set the subject of the channel", action: "Set the subject of the channel" },
                        { name: "Updates available reactions to use in the channel", value: "postChannelSetReactionSetting", description: "Valid values for passing to the method are: 0 for NONE reactions to be available 1 for BASIC reactions to be available: 👍, ❤️, 😂, 😮, 😢, 🙏 2 for ALL reactions to be available", action: "Updates available reactions to use in the channel" },
                        { name: "Delete a channel you created", value: "postChannelDeleteChannel", description: "Delete a channel you created", action: "Delete a channel you created" }
                    ],
                    default: "postChannelGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Chat"] } },
                    options: [
                        { name: "Get the chat", value: "postChatGetClassInfo", description: "Get the chat", action: "Get the chat" },
                        { name: "Clear all messages from the chat", value: "postChatClearMessages", description: "Clear all messages from the chat", action: "Clear all messages from the chat" },
                        { name: "Stop typing or recording in chat immediately", value: "postChatClearState", description: "Stop typing or recording in chat immediately", action: "Stop typing or recording in chat immediately" },
                        { name: "Delete the chat", value: "postChatDelete", description: "Delete the chat", action: "Delete the chat" },
                        { name: "Load chat messages", value: "postChatFetchMessages", description: "Messages sorted from earliest to latest", action: "Load chat messages" },
                        { name: "Get the contact", value: "postChatGetContact", description: "Get the contact", action: "Get the contact" },
                        { name: "Simulate recording audio", value: "postChatSendStateRecording", description: "Simulate recording audio in chat. This will last for 25 seconds", action: "Simulate recording audio" },
                        { name: "Simulate typing in chat", value: "postChatSendStateTyping", description: "Simulate typing in chat. This will last for 25 seconds.", action: "Simulate typing in chat" },
                        { name: "Set the message as seen", value: "postChatSendSeen", description: "Set the message as seen", action: "Set the message as seen" },
                        { name: "Mark this chat as unread", value: "postChatMarkUnread", description: "Mark this chat as unread", action: "Mark this chat as unread" },
                        { name: "Sync chat history", value: "postChatSyncHistory", description: "Sync chat history", action: "Sync chat history" },
                        { name: "Return all labels", value: "postChatGetLabels", description: "Return array of all labels assigned to this chat", action: "Return all labels" },
                        { name: "Add or remove labels", value: "postChatChangeLabels", description: "Add or remove labels", action: "Add or remove labels" },
                        { name: "Execute a method on the chat", value: "postChatRunMethod", description: "Execute a method on the chat and return the result", action: "Execute a method on the chat" }
                    ],
                    default: "postChatGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Client"] } },
                    options: [
                        { name: "Get current connection information", value: "getClientGetClassInfo", description: "Get current connection information", action: "Get current connection information" },
                        { name: "Accept an invitation to join a group", value: "postClientAcceptInvite", description: "Accept an invitation to join a group", action: "Accept an invitation to join a group" },
                        { name: "Archive the chat", value: "postClientArchiveChat", description: "Archive the chat", action: "Archive the chat" },
                        { name: "Create a new group", value: "postClientCreateGroup", description: "Create a new group", action: "Create a new group" },
                        { name: "Get all blocked contacts by host account", value: "postClientGetBlockedContacts", description: "Get all blocked contacts by host account", action: "Get all blocked contacts by host account" },
                        { name: "Get the chat", value: "postClientGetChatById", description: "Get the chat", action: "Get the chat" },
                        { name: "Get all labels assigned to the chat", value: "postClientGetChatLabels", description: "Get all labels assigned to the chat", action: "Get all labels assigned to the chat" },
                        { name: "Get all current chats", value: "getClientGetChats", description: "Get all current chats", action: "Get all current chats" },
                        { name: "Get all current chats with optional search parameters", value: "postClientGetChats", description: "Get all current chats with optional search parameters", action: "Get all current chats with optional search parameters" },
                        { name: "Get all chats for a specific label", value: "postClientGetChatsByLabelId", description: "Get all chats for a specific label", action: "Get all chats for a specific label" },
                        { name: "Get the contact's common groups", value: "postClientGetCommonGroups", description: "Get the contact's common groups with you. Returns empty array if you don't have any common group.", action: "Get the contact's common groups" },
                        { name: "Get the contact", value: "postClientGetContactById", description: "Get the contact", action: "Get the contact" },
                        { name: "Get all current contacts", value: "getClientGetContacts", description: "Get all current contacts", action: "Get all current contacts" },
                        { name: "Return invite information", value: "postClientGetInviteInfo", description: "Return an object with information about the invite code", action: "Return invite information" },
                        { name: "Get the label", value: "postClientGetLabelById", description: "Get the label", action: "Get the label" },
                        { name: "Get all current labels", value: "postClientGetLabels", description: "Get all current labels", action: "Get all current labels" },
                        { name: "Change labels in chats", value: "postClientAddOrRemoveLabels", description: "Change labels in chats", action: "Change labels in chats" },
                        { name: "Get the registered WhatsApp ID for a number", value: "postClientGetNumberId", description: "Return null if the number is not registered on WhatsApp", action: "Get the registered WhatsApp ID for a number" },
                        { name: "Check if a given ID is registered in WhatsApp", value: "postClientIsRegisteredUser", description: "Check if a given ID is registered in WhatsApp", action: "Check if a given ID is registered in WhatsApp" },
                        { name: "Return the contact ID's profile picture URL", value: "postClientGetProfilePicUrl", description: "Return the contact ID's profile picture URL", action: "Return the contact ID's profile picture URL" },
                        { name: "Get the current connection state for the client", value: "getClientGetState", description: "Get the current connection state for the client", action: "Get the current connection state for the client" },
                        { name: "Mark the chat as unread", value: "postClientMarkChatUnread", description: "Mark the chat as unread", action: "Mark the chat as unread" },
                        { name: "Mute the chat", value: "postClientMuteChat", description: "Mute this chat forever, unless a date is specified", action: "Mute the chat" },
                        { name: "Pin the chat", value: "postClientPinChat", description: "Pin the chat", action: "Pin the chat" },
                        { name: "Search for messages", value: "postClientSearchMessages", description: "Search for messages", action: "Search for messages" },
                        { name: "Send a message to a specific chatId", value: "postClientSendMessage", description: "Send a message to a specific chatId", action: "Send a message to a specific chatId" },
                        { name: "Mark the client as online", value: "postClientSendPresenceAvailable", description: "Mark the client as online", action: "Mark the client as online" },
                        { name: "Mark the client as unavailable", value: "postClientSendPresenceUnavailable", description: "Mark the client as unavailable", action: "Mark the client as unavailable" },
                        { name: "Mark the chat as seen", value: "postClientSendSeen", description: "Mark the chat as seen", action: "Mark the chat as seen" },
                        { name: "Set the current user", value: "postClientSetDisplayName", description: "This is the name shown to WhatsApp users that have not added you as a contact beside your number in groups and in your profile.", action: "Set the current user" },
                        { name: "Set the current user\\'s profile picture", value: "postClientSetProfilePicture", description: "Set the current user\\'s profile picture", action: "Set the current user\\'s profile picture" },
                        { name: "Set the current user's status message", value: "postClientSetStatus", description: "Set the current user's status message", action: "Set the current user's status message" },
                        { name: "Changes archive state of the chat", value: "postClientUnarchiveChat", description: "Changes archive state of the chat", action: "Changes archive state of the chat" },
                        { name: "Unmute the chat", value: "postClientUnmuteChat", description: "Unmute the chat", action: "Unmute the chat" },
                        { name: "Unpin the chat", value: "postClientUnpinChat", description: "Unpin the chat", action: "Unpin the chat" },
                        { name: "Return the version of WhatsApp Web currently being run", value: "getClientGetWWebVersion", description: "Return the version of WhatsApp Web currently being run", action: "Return the version of WhatsApp Web currently being run" },
                        { name: "Delete the current user's profile picture", value: "deleteClientDeleteProfilePicture", description: "Delete the current user's profile picture", action: "Delete the current user's profile picture" },
                        { name: "Set auto load download audio flag", value: "postClientSetAutoDownloadAudio", description: "Set auto load download audio flag", action: "Set auto load download audio flag" },
                        { name: "Set auto load download documents flag", value: "postClientSetAutoDownloadDocuments", description: "Set auto load download documents flag", action: "Set auto load download documents flag" },
                        { name: "Set auto load download photos flag", value: "postClientSetAutoDownloadPhotos", description: "Set auto load download photos flag", action: "Set auto load download photos flag" },
                        { name: "Set auto load download videos flag", value: "postClientSetAutoDownloadVideos", description: "Set auto load download videos flag", action: "Set auto load download videos flag" },
                        { name: "Sync chat history", value: "postClientSyncHistory", description: "Sync chat history", action: "Sync chat history" },
                        { name: "Get user device count", value: "postClientGetContactDeviceCount", description: "Each WaWeb Connection counts as one device, and the phone (if exists) counts as one device. So for a non-enterprise user with one WaWeb connection it should return \"2\"", action: "Get user device count" },
                        { name: "Get the country code", value: "postClientGetCountryCode", description: "Get the country code", action: "Get the country code" },
                        { name: "Get the formatted number", value: "postClientGetFormattedNumber", description: "Get the formatted number", action: "Get the formatted number" },
                        { name: "Open the chat window", value: "postClientOpenChatWindow", description: "Open the chat window", action: "Open the chat window" },
                        { name: "Open the chat window to the position of the message", value: "postClientOpenChatWindowAt", description: "Open the chat window to the position of the message", action: "Open the chat window to the position of the message" },
                        { name: "Force reset of connection state for the client", value: "postClientResetState", description: "Force reset of connection state for the client", action: "Force reset of connection state for the client" },
                        { name: "Change the background synchronization setting", value: "postClientSetBackgroundSync", description: "NOTE: This action will take effect after you restart the client", action: "Change the background synchronization setting" },
                        { name: "Get contact lid and phone", value: "postClientGetContactLidAndPhone", description: "Retrieve the contact lid and phone number for a specific chat", action: "Get contact lid and phone" },
                        { name: "Get channel by invite code", value: "postClientGetChannelByInviteCode", description: "Get channel by invite code", action: "Get channel by invite code" },
                        { name: "Get channels from the client", value: "getClientGetChannels", description: "Retrieve a list of channels from the client", action: "Get channels from the client" },
                        { name: "Create a new channel", value: "postClientCreateChannel", description: "Create a new channel", action: "Create a new channel" },
                        { name: "Subscribe to a channel", value: "postClientSubscribeToChannel", description: "Subscribe to a channel", action: "Subscribe to a channel" },
                        { name: "Unsubscribe from channel", value: "postClientUnsubscribeFromChannel", description: "Unsubscribe from channel", action: "Unsubscribe from channel" },
                        { name: "Search channels", value: "postClientSearchChannels", description: "Search channels", action: "Search channels" },
                        { name: "Execute a method on the client", value: "postClientRunMethod", description: "Execute a method on the client and return the result", action: "Execute a method on the client" }
                    ],
                    default: "getClientGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Contact"] } },
                    options: [
                        { name: "Get the contact", value: "postContactGetClassInfo", description: "Get the contact", action: "Get the contact" },
                        { name: "Block contact", value: "postContactBlock", description: "Block contact", action: "Block contact" },
                        { name: "Get the contact's current info", value: "postContactGetAbout", description: "Get the Contact's current 'about' info. Returns null if you don't have permission to read their status.", action: "Get the contact's current info" },
                        { name: "Get the chat", value: "postContactGetChat", description: "Get the chat that corresponds to the contact. Will return null when getting chat for currently logged in user.", action: "Get the chat" },
                        { name: "Unblock the contact", value: "postContactUnblock", description: "Unblock the contact from WhatsApp.", action: "Unblock the contact" },
                        { name: "Get the formatted phone number", value: "postContactGetFormattedNumber", description: "Returns the contact's formatted phone number, (12345678901@c.us) => (+1 (234) 5678-901).", action: "Get the formatted phone number" },
                        { name: "Get the country code", value: "postContactGetCountryCode", description: "Returns the contact's country code, (1541859685@c.us) => (1).", action: "Get the country code" },
                        { name: "Get the profile picture URL", value: "postContactGetProfilePicUrl", description: "Get the contact's profile picture URL, if privacy settings allow it.", action: "Get the profile picture URL" },
                        { name: "Get the contact's common groups", value: "postContactGetCommonGroups", description: "Get the contact's common groups with you. Returns empty array if you don't have any common group.", action: "Get the contact's common groups" }
                    ],
                    default: "postContactGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["GroupChat"] } },
                    options: [
                        { name: "Get the group", value: "postGroupChatGetClassInfo", description: "Get the group", action: "Get the group" },
                        { name: "Add the participants", value: "postGroupChatAddParticipants", description: "Add a list of participants by ID to the group", action: "Add the participants" },
                        { name: "Demote the participants", value: "postGroupChatDemoteParticipants", description: "Demote participants by ID to regular users", action: "Demote the participants" },
                        { name: "Get the invite code", value: "postGroupChatGetInviteCode", description: "Get the invite code for a specific group", action: "Get the invite code" },
                        { name: "Leave the group", value: "postGroupChatLeave", description: "Leave the group", action: "Leave the group" },
                        { name: "Promote the participants", value: "postGroupChatPromoteParticipants", description: "Promote participants by ID to admins", action: "Promote the participants" },
                        { name: "Remove the participants", value: "postGroupChatRemoveParticipants", description: "Remove a list of participants by ID to the group", action: "Remove the participants" },
                        { name: "Invalidate the invite code", value: "postGroupChatRevokeInvite", description: "Invalidate the current group invite code and generates a new one", action: "Invalidate the invite code" },
                        { name: "Update the group description", value: "postGroupChatSetDescription", description: "Update the group description", action: "Update the group description" },
                        { name: "Update the info group settings", value: "postGroupChatSetInfoAdminsOnly", description: "Update the info group settings", action: "Update the info group settings" },
                        { name: "Update the message group settings", value: "postGroupChatSetMessagesAdminsOnly", description: "Update the message group settings", action: "Update the message group settings" },
                        { name: "Update the group subject", value: "postGroupChatSetSubject", description: "Update the group subject", action: "Update the group subject" },
                        { name: "Set the group picture", value: "postGroupChatSetPicture", description: "Set the group picture", action: "Set the group picture" },
                        { name: "Delete the group picture", value: "postGroupChatDeletePicture", description: "Delete the group picture", action: "Delete the group picture" },
                        { name: "Get the membership requests", value: "postGroupChatGetGroupMembershipRequests", description: "Get the membership requests", action: "Get the membership requests" },
                        { name: "Approve membership request", value: "postGroupChatApproveGroupMembershipRequests", description: "Approve membership request", action: "Approve membership request" },
                        { name: "Reject membership request", value: "postGroupChatRejectGroupMembershipRequests", description: "Reject membership request", action: "Reject membership request" },
                        { name: "Execute a method on the group", value: "postGroupChatRunMethod", description: "Execute a method on the group and return the result", action: "Execute a method on the group" }
                    ],
                    default: "postGroupChatGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Message"] } },
                    options: [
                        { name: "Get message", value: "postMessageGetClassInfo", description: "Get message", action: "Get message" },
                        { name: "Delete a message from the chat", value: "postMessageDelete", description: "Delete a message from the chat", action: "Delete a message from the chat" },
                        { name: "Download attached message media", value: "postMessageDownloadMedia", description: "Download attached message media", action: "Download attached message media" },
                        { name: "Download attached message media as binary data", value: "postMessageDownloadMediaAsData", description: "Download attached message media as binary data", action: "Download attached message media as binary data" },
                        { name: "Delete a message from the chat", value: "postMessageForward", description: "Delete a message from the chat", action: "Delete a message from the chat" },
                        { name: "Get information about message delivery status", value: "postMessageGetInfo", description: "May return null if the message does not exist or is not sent by you.", action: "Get information about message delivery status" },
                        { name: "Get the contacts mentioned", value: "postMessageGetMentions", description: "Get the contacts mentioned", action: "Get the contacts mentioned" },
                        { name: "Get the order details", value: "postMessageGetOrder", description: "Get the order details", action: "Get the order details" },
                        { name: "Get the payment details", value: "postMessageGetPayment", description: "Get the payment details", action: "Get the payment details" },
                        { name: "Get the quoted message", value: "postMessageGetQuotedMessage", description: "Get the quoted message", action: "Get the quoted message" },
                        { name: "React with an emoji", value: "postMessageReact", description: "React with an emoji", action: "React with an emoji" },
                        { name: "Send a message as a reply", value: "postMessageReply", description: "Send a message as a reply", action: "Send a message as a reply" },
                        { name: "Star the message", value: "postMessageStar", description: "Star the message", action: "Star the message" },
                        { name: "Unstar the message", value: "postMessageUnstar", description: "Unstar the message", action: "Unstar the message" },
                        { name: "Get the reactions associated", value: "postMessageGetReactions", description: "Get the reactions associated", action: "Get the reactions associated" },
                        { name: "Get groups mentioned in this message", value: "postMessageGetGroupMentions", description: "Get groups mentioned in this message", action: "Get groups mentioned in this message" },
                        { name: "Edit the message", value: "postMessageEdit", description: "Edit the message", action: "Edit the message" },
                        { name: "Get the contact", value: "postMessageGetContact", description: "Get the contact", action: "Get the contact" },
                        { name: "Execute a method on the message", value: "postMessageRunMethod", description: "Execute a method on the message and return the result", action: "Execute a method on the message" }
                    ],
                    default: "postMessageGetClassInfo",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Session"] } },
                    options: [
                        { name: "Get all sessions", value: "getSessionGetSessions", description: "Get all sessions.", action: "Get all sessions" },
                        { name: "Start new session", value: "getSessionStart", description: "Starts a session for the given session ID.", action: "Start new session" },
                        { name: "Stop session", value: "getSessionStop", description: "Stops a session for the given session ID.", action: "Stop session" },
                        { name: "Get session status", value: "getSessionStatus", description: "Status of the session with the given session ID.", action: "Get session status" },
                        { name: "Get session QR code", value: "getSessionQr", description: "QR code of the session with the given session ID.", action: "Get session QR code" },
                        { name: "Get session QR code as image", value: "getSessionQrImage", description: "QR code as image of the session with the given session ID.", action: "Get session QR code as image" },
                        { name: "Request authentication via pairing code", value: "postSessionRequestPairingCode", description: "Request authentication via pairing code", action: "Request authentication via pairing code" },
                        { name: "Restart session", value: "getSessionRestart", description: "Restarts the session with the given session ID.", action: "Restart session" },
                        { name: "Terminate session", value: "getSessionTerminate", description: "Terminates the session with the given session ID.", action: "Terminate session" },
                        { name: "Terminate inactive sessions", value: "getSessionTerminateInactive", description: "Terminates all inactive sessions.", action: "Terminate inactive sessions" },
                        { name: "Terminate all sessions", value: "getSessionTerminateAll", description: "Terminates all sessions.", action: "Terminate all sessions" },
                        { name: "Get page screenshot", value: "getSessionGetPageScreenshot", description: "Screenshot of the client with the given session ID.", action: "Get page screenshot" }
                    ],
                    default: "getSessionGetSessions",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: { show: { resource: ["Various"] } },
                    options: [
                        { name: "Health check", value: "getPing", description: "Responds to request with \"pong\" message", action: "Health check" },
                        { name: "Local callback", value: "postLocalCallbackExample", description: "Used to generate a QR code and writes a log file. ONLY FOR DEVELOPMENT/TEST PURPOSES.", action: "Local callback" }
                    ],
                    default: "getPing",
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionStart"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionStop"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionStatus"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionQr"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionQrImage"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["postSessionRequestPairingCode"] } },
                },
                {
                    displayName: "PhoneNumber",
                    name: "body_phoneNumber",
                    type: "string",
                    default: "12025550108",
                    required: false,
                    description: "Phone number in international, symbol-free format",
                    displayOptions: { show: { resource: ["Session"], operation: ["postSessionRequestPairingCode"] } },
                },
                {
                    displayName: "ShowNotification",
                    name: "body_showNotification",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Show notification to pair on phone number",
                    displayOptions: { show: { resource: ["Session"], operation: ["postSessionRequestPairingCode"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionRestart"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionTerminate"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Session"], operation: ["getSessionGetPageScreenshot"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientAcceptInvite"] } },
                },
                {
                    displayName: "InviteCode",
                    name: "body_inviteCode",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Invitation code",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientAcceptInvite"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientArchiveChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientArchiveChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateGroup"] } },
                },
                {
                    displayName: "Title",
                    name: "body_title",
                    type: "string",
                    default: "Group name",
                    required: false,
                    description: "Group title",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateGroup"] } },
                },
                {
                    displayName: "Participants",
                    name: "body_participants",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "A single contact ID as a string or an array of contact IDs to add to the group",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateGroup"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "An object that handles options for group creation",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateGroup"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetBlockedContacts"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatById"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatById"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatLabels"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatLabels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetChats"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChats"] } },
                },
                {
                    displayName: "SearchOptions",
                    name: "body_searchOptions",
                    type: "string",
                    default: "",
                    required: false,
                    description: "",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChats"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatsByLabelId"] } },
                },
                {
                    displayName: "LabelId",
                    name: "body_labelId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the label",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChatsByLabelId"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetCommonGroups"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The whatsapp user's ID (_serialized format)",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetCommonGroups"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactById"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The whatsapp user's ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactById"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetContacts"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetInviteInfo"] } },
                },
                {
                    displayName: "DisplayName",
                    name: "body_displayName",
                    type: "string",
                    default: "",
                    required: false,
                    description: "New display name",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetInviteInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetLabelById"] } },
                },
                {
                    displayName: "LabelId",
                    name: "body_labelId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the label",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetLabelById"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetLabels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientAddOrRemoveLabels"] } },
                },
                {
                    displayName: "LabelIds",
                    name: "body_labelIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Array of label IDs",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientAddOrRemoveLabels"] } },
                },
                {
                    displayName: "ChatIds",
                    name: "body_chatIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Array of chat IDs",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientAddOrRemoveLabels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetNumberId"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "6281288888888",
                    required: false,
                    description: "The number or ID ('@c.us' will be automatically appended if not specified)",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetNumberId"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientIsRegisteredUser"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "6281288888888",
                    required: false,
                    description: "The number or ID ('@c.us' will be automatically appended if not specified)",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientIsRegisteredUser"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetProfilePicUrl"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The contact ID's of profile",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetProfilePicUrl"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetState"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientMarkChatUnread"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientMarkChatUnread"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientMuteChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientMuteChat"] } },
                },
                {
                    displayName: "UnmuteDate",
                    name: "body_unmuteDate",
                    type: "string",
                    default: "1733489397",
                    required: false,
                    description: "Timestamp when the chat will be muted, leave as is to mute forever",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientMuteChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientPinChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientPinChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSearchMessages"] } },
                },
                {
                    displayName: "Query",
                    name: "body_query",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Search string",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSearchMessages"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Search options",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSearchMessages"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The chat id which contains the message (Group or Individual)",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendMessage"] } },
                },
                {
                    displayName: "ContentType",
                    name: "body_contentType",
                    type: "options",
                    default: "string",
                    required: false,
                    description: "The type of message content, must be one of the following: string, MessageMedia, MessageMediaFromURL, Location, Contact or Poll",
                    options: [
                        { name: "string", value: "string" },
                        { name: "MessageMedia", value: "MessageMedia" },
                        { name: "MessageMediaFromURL", value: "MessageMediaFromURL" },
                        { name: "Location", value: "Location" },
                        { name: "Contact", value: "Contact" },
                        { name: "Poll", value: "Poll" }
                    ],
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendMessage"] } },
                },
                {
                    displayName: "Content",
                    name: "body_content",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The content of the message, can be a string or an object",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendMessage"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The message send options",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendMessage"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendPresenceAvailable"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendPresenceUnavailable"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendSeen"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSendSeen"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetDisplayName"] } },
                },
                {
                    displayName: "PictureMimetype",
                    name: "body_pictureMimetype",
                    type: "string",
                    default: "image/png",
                    required: false,
                    description: "The mimetype of the picture to set as the profile picture for the user WhatsApp account.",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetDisplayName"] } },
                },
                {
                    displayName: "PictureData",
                    name: "body_pictureData",
                    type: "string",
                    default: "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX +/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII=",
                    required: false,
                    description: "The base64 data of the picture to set as the profile picture for the user WhatsApp account.",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetDisplayName"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetProfilePicture"] } },
                },
                {
                    displayName: "PictureMimetype",
                    name: "body_pictureMimetype",
                    type: "string",
                    default: "image/png",
                    required: false,
                    description: "The mimetype of the picture to set as the profile picture for the user WhatsApp account.",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetProfilePicture"] } },
                },
                {
                    displayName: "PictureData",
                    name: "body_pictureData",
                    type: "string",
                    default: "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX +/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII=",
                    required: false,
                    description: "The base64 data of the picture to set as the profile picture for the user WhatsApp account.",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetProfilePicture"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetStatus"] } },
                },
                {
                    displayName: "Status",
                    name: "body_status",
                    type: "string",
                    default: "I'm running WWebJS Api",
                    required: false,
                    description: "New status message",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetStatus"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnarchiveChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnarchiveChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnmuteChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnmuteChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnpinChat"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnpinChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetWWebVersion"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["deleteClientDeleteProfilePicture"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadAudio"] } },
                },
                {
                    displayName: "Flag",
                    name: "body_flag",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Flag true/false",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadAudio"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadDocuments"] } },
                },
                {
                    displayName: "Flag",
                    name: "body_flag",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Flag true/false",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadDocuments"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadPhotos"] } },
                },
                {
                    displayName: "Flag",
                    name: "body_flag",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Flag true/false",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadPhotos"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadVideos"] } },
                },
                {
                    displayName: "Flag",
                    name: "body_flag",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Flag true/false",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetAutoDownloadVideos"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSyncHistory"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSyncHistory"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactDeviceCount"] } },
                },
                {
                    displayName: "UserId",
                    name: "body_userId",
                    type: "string",
                    default: "",
                    required: false,
                    description: "ID of the user",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactDeviceCount"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetCountryCode"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Number or ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetCountryCode"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetFormattedNumber"] } },
                },
                {
                    displayName: "Number",
                    name: "body_number",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Number or ID",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetFormattedNumber"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientOpenChatWindow"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "ID of the chat",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientOpenChatWindow"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientOpenChatWindowAt"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "false_31235678901@c.us_3A40CB10BC3680B1EE",
                    required: false,
                    description: "ID of the message to scroll to (serialized)",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientOpenChatWindowAt"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientResetState"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetBackgroundSync"] } },
                },
                {
                    displayName: "Flag",
                    name: "body_flag",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "flag true/false",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSetBackgroundSync"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactLidAndPhone"] } },
                },
                {
                    displayName: "UserIds",
                    name: "body_userIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetContactLidAndPhone"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChannelByInviteCode"] } },
                },
                {
                    displayName: "InviteCode",
                    name: "body_inviteCode",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The code that comes after the 'https://whatsapp.com/channel/'",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientGetChannelByInviteCode"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["getClientGetChannels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateChannel"] } },
                },
                {
                    displayName: "Title",
                    name: "body_title",
                    type: "string",
                    default: "My New Channel",
                    required: false,
                    description: "The title of the channel",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateChannel"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientCreateChannel"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSubscribeToChannel"] } },
                },
                {
                    displayName: "ChannelId",
                    name: "body_channelId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "The ID of the channel",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSubscribeToChannel"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnsubscribeFromChannel"] } },
                },
                {
                    displayName: "ChannelId",
                    name: "body_channelId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "The ID of the channel",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnsubscribeFromChannel"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientUnsubscribeFromChannel"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSearchChannels"] } },
                },
                {
                    displayName: "SearchOptions",
                    name: "body_searchOptions",
                    type: "string",
                    default: "",
                    required: false,
                    description: "",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientSearchChannels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientRunMethod"] } },
                },
                {
                    displayName: "Method",
                    name: "body_method",
                    type: "string",
                    default: "getLabels",
                    required: false,
                    description: "The name of the method to execute",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientRunMethod"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The options to pass to the method",
                    displayOptions: { show: { resource: ["Client"], operation: ["postClientRunMethod"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetClassInfo"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatClearMessages"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatClearMessages"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatClearState"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatClearState"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatDelete"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatDelete"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatFetchMessages"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp identifier for the given Chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatFetchMessages"] } },
                },
                {
                    displayName: "SearchOptions",
                    name: "body_searchOptions",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Search options for fetching messages",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatFetchMessages"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetContact"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetContact"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendStateRecording"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendStateRecording"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendStateTyping"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendStateTyping"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendSeen"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSendSeen"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatMarkUnread"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatMarkUnread"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSyncHistory"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatSyncHistory"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetLabels"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the given chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatGetLabels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatChangeLabels"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp identifier for the given Chat (either group or personal)",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatChangeLabels"] } },
                },
                {
                    displayName: "LabelIds",
                    name: "body_labelIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Array of (number or string)",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatChangeLabels"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatRunMethod"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatRunMethod"] } },
                },
                {
                    displayName: "Method",
                    name: "body_method",
                    type: "string",
                    default: "getLabels",
                    required: false,
                    description: "The name of the method to execute",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatRunMethod"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The options to pass to the method",
                    displayOptions: { show: { resource: ["Chat"], operation: ["postChatRunMethod"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetClassInfo"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatAddParticipants"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatAddParticipants"] } },
                },
                {
                    displayName: "ParticipantIds",
                    name: "body_participantIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Unique WhatsApp identifiers for the participants",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatAddParticipants"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options for adding participants",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatAddParticipants"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatDemoteParticipants"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatDemoteParticipants"] } },
                },
                {
                    displayName: "ParticipantIds",
                    name: "body_participantIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Unique WhatsApp identifiers for the participants",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatDemoteParticipants"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetInviteCode"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetInviteCode"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatLeave"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatLeave"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatPromoteParticipants"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatPromoteParticipants"] } },
                },
                {
                    displayName: "ParticipantIds",
                    name: "body_participantIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Unique WhatsApp identifiers for the participants",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatPromoteParticipants"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRemoveParticipants"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRemoveParticipants"] } },
                },
                {
                    displayName: "ParticipantIds",
                    name: "body_participantIds",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Unique WhatsApp identifiers for the participants",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRemoveParticipants"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRevokeInvite"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRevokeInvite"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetDescription"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetDescription"] } },
                },
                {
                    displayName: "Description",
                    name: "body_description",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Group description",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetDescription"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetInfoAdminsOnly"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetInfoAdminsOnly"] } },
                },
                {
                    displayName: "AdminsOnly",
                    name: "body_adminsOnly",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Enable or disable this option",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetInfoAdminsOnly"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetMessagesAdminsOnly"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetMessagesAdminsOnly"] } },
                },
                {
                    displayName: "AdminsOnly",
                    name: "body_adminsOnly",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "Enable or disable this option",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetMessagesAdminsOnly"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetSubject"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetSubject"] } },
                },
                {
                    displayName: "Subject",
                    name: "body_subject",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Group subject",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetSubject"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetPicture"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetPicture"] } },
                },
                {
                    displayName: "PictureMimeType",
                    name: "body_pictureMimeType",
                    type: "string",
                    default: "",
                    required: false,
                    description: "MIME type of the attachment",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetPicture"] } },
                },
                {
                    displayName: "PictureData",
                    name: "body_pictureData",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Base64-encoded data of the file",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatSetPicture"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatDeletePicture"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatDeletePicture"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetGroupMembershipRequests"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatGetGroupMembershipRequests"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatApproveGroupMembershipRequests"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatApproveGroupMembershipRequests"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options for performing a membership request action",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatApproveGroupMembershipRequests"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRejectGroupMembershipRequests"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRejectGroupMembershipRequests"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options for performing a membership request action",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRejectGroupMembershipRequests"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRunMethod"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@g.us",
                    required: false,
                    description: "Unique WhatsApp id for the given chat group",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRunMethod"] } },
                },
                {
                    displayName: "Method",
                    name: "body_method",
                    type: "string",
                    default: "getLabels",
                    required: false,
                    description: "The name of the method to execute",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRunMethod"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The options to pass to the method",
                    displayOptions: { show: { resource: ["GroupChat"], operation: ["postGroupChatRunMethod"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetClassInfo"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetClassInfo"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDelete"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDelete"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDelete"] } },
                },
                {
                    displayName: "Everyone",
                    name: "body_everyone",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "If true and the message is sent by the current user or the user is an admin, will delete it for everyone in the chat.",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDelete"] } },
                },
                {
                    displayName: "ClearMedia",
                    name: "body_clearMedia",
                    type: "boolean",
                    default: true,
                    required: false,
                    description: "If true, any associated media will also be deleted from a device",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDelete"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMedia"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMedia"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMedia"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMediaAsData"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMediaAsData"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageDownloadMediaAsData"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageForward"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageForward"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageForward"] } },
                },
                {
                    displayName: "DestinationChatId",
                    name: "body_destinationChatId",
                    type: "string",
                    default: "6281288888889@c.us",
                    required: false,
                    description: "The chat id to forward the message to",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageForward"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetInfo"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetInfo"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetMentions"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetMentions"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetMentions"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetOrder"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetOrder"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetOrder"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetPayment"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetPayment"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetPayment"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetQuotedMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetQuotedMessage"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetQuotedMessage"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReact"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReact"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReact"] } },
                },
                {
                    displayName: "Reaction",
                    name: "body_reaction",
                    type: "string",
                    default: "👍",
                    required: false,
                    description: "Emoji to react with. Send an empty string to remove the reaction.",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReact"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
                    displayName: "ContentType",
                    name: "body_contentType",
                    type: "options",
                    default: "string",
                    required: false,
                    description: "The type of message content, must be one of the following: string, MessageMedia, MessageMediaFromURL, Location, Contact or Poll",
                    options: [
                        { name: "string", value: "string" },
                        { name: "MessageMedia", value: "MessageMedia" },
                        { name: "MessageMediaFromURL", value: "MessageMediaFromURL" },
                        { name: "Location", value: "Location" },
                        { name: "Contact", value: "Contact" },
                        { name: "Poll", value: "Poll" }
                    ],
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
                    displayName: "Content",
                    name: "body_content",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The content of the message, can be a string or an object",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The message send options",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageReply"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageStar"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageStar"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageStar"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageUnstar"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageUnstar"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageUnstar"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetReactions"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetReactions"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetReactions"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetGroupMentions"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetGroupMentions"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetGroupMentions"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageEdit"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageEdit"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageEdit"] } },
                },
                {
                    displayName: "Content",
                    name: "body_content",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The content of the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageEdit"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options used when editing the message",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageEdit"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetContact"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetContact"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp ID for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageGetContact"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageRunMethod"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "The chat id which contains the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageRunMethod"] } },
                },
                {
                    displayName: "MessageId",
                    name: "body_messageId",
                    type: "string",
                    default: "ABCDEF999999999",
                    required: false,
                    description: "Unique WhatsApp identifier for the message",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageRunMethod"] } },
                },
                {
                    displayName: "Method",
                    name: "body_method",
                    type: "string",
                    default: "getInfo",
                    required: false,
                    description: "The name of the method to execute",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageRunMethod"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "",
                    required: false,
                    description: "The options to pass to the method",
                    displayOptions: { show: { resource: ["Message"], operation: ["postMessageRunMethod"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetClassInfo"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactBlock"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactBlock"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetAbout"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetAbout"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetChat"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetChat"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactUnblock"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactUnblock"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetFormattedNumber"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetFormattedNumber"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetCountryCode"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetCountryCode"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetProfilePicUrl"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetProfilePicUrl"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetCommonGroups"] } },
                },
                {
                    displayName: "ContactId",
                    name: "body_contactId",
                    type: "string",
                    default: "6281288888888@c.us",
                    required: false,
                    description: "Unique WhatsApp ID for the contact",
                    displayOptions: { show: { resource: ["Contact"], operation: ["postContactGetCommonGroups"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelGetClassInfo"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelGetClassInfo"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendMessage"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "The channel id",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendMessage"] } },
                },
                {
                    displayName: "ContentType",
                    name: "body_contentType",
                    type: "options",
                    default: "string",
                    required: false,
                    description: "The type of message content, must be one of the following: string, MessageMedia, MessageMediaFromURL",
                    options: [
                        { name: "string", value: "string" },
                        { name: "MessageMedia", value: "MessageMedia" },
                        { name: "MessageMediaFromURL", value: "MessageMediaFromURL" }
                    ],
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendMessage"] } },
                },
                {
                    displayName: "Content",
                    name: "body_content",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The content of the message, can be a string or an object",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendMessage"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "The message send options",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendMessage"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelFetchMessages"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp identifier for the given Chat (either group or personal)",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelFetchMessages"] } },
                },
                {
                    displayName: "SearchOptions",
                    name: "body_searchOptions",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Search options for fetching messages",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelFetchMessages"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendSeen"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendSeen"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelMute"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelMute"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelUnmute"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelUnmute"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelAcceptChannelAdminInvite"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelAcceptChannelAdminInvite"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendChannelAdminInvite"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendChannelAdminInvite"] } },
                },
                {
                    displayName: "UserId",
                    name: "body_userId",
                    type: "string",
                    default: "XXXXXXXXXX@c.us",
                    required: false,
                    description: "The ID of the user to demote",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendChannelAdminInvite"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options for sending a channel admin invitation to a user",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSendChannelAdminInvite"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelRevokeChannelAdminInvite"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelRevokeChannelAdminInvite"] } },
                },
                {
                    displayName: "UserId",
                    name: "body_userId",
                    type: "string",
                    default: "XXXXXXXXXX@c.us",
                    required: false,
                    description: "The ID of the user to demote",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelRevokeChannelAdminInvite"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelTransferChannelOwnership"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelTransferChannelOwnership"] } },
                },
                {
                    displayName: "NewOwnerId",
                    name: "body_newOwnerId",
                    type: "string",
                    default: "XXXXXXXXXX@c.us",
                    required: false,
                    description: "The ID of the user to transfer ownership to",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelTransferChannelOwnership"] } },
                },
                {
                    displayName: "Options",
                    name: "body_options",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "Options for transferring a channel ownership to another user",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelTransferChannelOwnership"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelDemoteChannelAdmin"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelDemoteChannelAdmin"] } },
                },
                {
                    displayName: "UserId",
                    name: "body_userId",
                    type: "string",
                    default: "XXXXXXXXXX@c.us",
                    required: false,
                    description: "The ID of the user to demote",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelDemoteChannelAdmin"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelGetSubscribers"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelGetSubscribers"] } },
                },
                {
                    displayName: "Limit",
                    name: "body_limit",
                    type: "number",
                    default: 100,
                    required: false,
                    description: "The maximum number of subscribers to return",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelGetSubscribers"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetProfilePicture"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetProfilePicture"] } },
                },
                {
                    displayName: "NewProfilePictureUrl",
                    name: "body_newProfilePictureUrl",
                    type: "string",
                    default: "",
                    required: false,
                    description: "New profile picture URL for the channel",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetProfilePicture"] } },
                },
                {
                    displayName: "NewProfilePictureMedia",
                    name: "body_newProfilePictureMedia",
                    type: "string",
                    default: "{}",
                    required: false,
                    description: "New profile picture media for the channel",
                    typeOptions: { rows: 2 },
                    hint: "Enter as JSON",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetProfilePicture"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetDescription"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetDescription"] } },
                },
                {
                    displayName: "NewDescription",
                    name: "body_newDescription",
                    type: "string",
                    default: "This is the updated channel description",
                    required: false,
                    description: "New description for the channel",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetDescription"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetSubject"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetSubject"] } },
                },
                {
                    displayName: "NewSubject",
                    name: "body_newSubject",
                    type: "string",
                    default: "New Channel Subject",
                    required: false,
                    description: "The new subject for the channel",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetSubject"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetReactionSetting"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetReactionSetting"] } },
                },
                {
                    displayName: "ReactionCode",
                    name: "body_reactionCode",
                    type: "number",
                    default: 1,
                    required: false,
                    description: "New reaction setting for the channel",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelSetReactionSetting"] } },
                },
                {
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
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelDeleteChannel"] } },
                },
                {
                    displayName: "ChatId",
                    name: "body_chatId",
                    type: "string",
                    default: "XXXXXXXXXX@newsletter",
                    required: false,
                    description: "Unique WhatsApp id for the given channel group",
                    displayOptions: { show: { resource: ["ChannelChat"], operation: ["postChannelDeleteChannel"] } },
                }
            ],
        };
        this.methods = {
            listSearch: {
                async getSessions() {
                    const credentials = await this.getCredentials("wWebjsApiCredentials");
                    const baseUrl = credentials.baseUrl.replace(/\/$/, "");
                    const apiKey = credentials.apiKey;
                    try {
                        const response = await this.helpers.httpRequest({
                            method: "GET",
                            url: `${baseUrl}/session/getSessions`,
                            headers: { "x-api-key": apiKey },
                            json: true,
                        });
                        // Formatos possíveis:
                        // 1. [{ success: true, result: ["wa123", "wa456"] }]  ← formato atual
                        // 2. { success: true, result: ["wa123"] }
                        // 3. ["wa123", "wa456"]
                        let sessions = [];
                        if (Array.isArray(response)) {
                            const first = response[0];
                            if (first && Array.isArray(first.result)) {
                                sessions = first.result;
                            }
                            else if (typeof first === 'string') {
                                sessions = response;
                            }
                        }
                        else if (response && Array.isArray(response.result)) {
                            sessions = response.result;
                        }
                        if (!sessions.length) {
                            return { results: [{ name: "default (no active sessions)", value: "default" }] };
                        }
                        return {
                            results: sessions.map((id) => ({ name: id, value: id })),
                        };
                    }
                    catch {
                        return { results: [{ name: "default", value: "default" }] };
                    }
                },
            },
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
                    case "ChannelChat": {
                        switch (operation) {
                            case "postChannelGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/getClassInfo/${sessionId}`;
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
                            case "postChannelSendMessage": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/sendMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        contentType: this.getNodeParameter("body_contentType", i),
                                        content: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_content", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelFetchMessages": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/fetchMessages/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        searchOptions: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_searchOptions", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelSendSeen": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/sendSeen/${sessionId}`;
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
                            case "postChannelMute": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/mute/${sessionId}`;
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
                            case "postChannelUnmute": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/unmute/${sessionId}`;
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
                            case "postChannelAcceptChannelAdminInvite": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/acceptChannelAdminInvite/${sessionId}`;
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
                            case "postChannelSendChannelAdminInvite": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/sendChannelAdminInvite/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        userId: this.getNodeParameter("body_userId", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelRevokeChannelAdminInvite": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/revokeChannelAdminInvite/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        userId: this.getNodeParameter("body_userId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelTransferChannelOwnership": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/transferChannelOwnership/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        newOwnerId: this.getNodeParameter("body_newOwnerId", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelDemoteChannelAdmin": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/demoteChannelAdmin/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        userId: this.getNodeParameter("body_userId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelGetSubscribers": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/getSubscribers/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        limit: this.getNodeParameter("body_limit", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelSetProfilePicture": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/setProfilePicture/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        newProfilePictureUrl: this.getNodeParameter("body_newProfilePictureUrl", i),
                                        newProfilePictureMedia: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_newProfilePictureMedia", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelSetDescription": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/setDescription/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        newDescription: this.getNodeParameter("body_newDescription", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelSetSubject": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/setSubject/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        newSubject: this.getNodeParameter("body_newSubject", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelSetReactionSetting": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/setReactionSetting/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        reactionCode: this.getNodeParameter("body_reactionCode", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChannelDeleteChannel": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/channel/deleteChannel/${sessionId}`;
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
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    case "Chat": {
                        switch (operation) {
                            case "postChatGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/getClassInfo/${sessionId}`;
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
                            case "postChatClearMessages": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/clearMessages/${sessionId}`;
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
                            case "postChatClearState": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/clearState/${sessionId}`;
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
                            case "postChatDelete": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/delete/${sessionId}`;
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
                            case "postChatFetchMessages": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/fetchMessages/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        searchOptions: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_searchOptions", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChatGetContact": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/getContact/${sessionId}`;
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
                            case "postChatSendStateRecording": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/sendStateRecording/${sessionId}`;
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
                            case "postChatSendStateTyping": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/sendStateTyping/${sessionId}`;
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
                            case "postChatSendSeen": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/sendSeen/${sessionId}`;
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
                            case "postChatMarkUnread": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/markUnread/${sessionId}`;
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
                            case "postChatSyncHistory": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/syncHistory/${sessionId}`;
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
                            case "postChatGetLabels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/getLabels/${sessionId}`;
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
                            case "postChatChangeLabels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/changeLabels/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        labelIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_labelIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postChatRunMethod": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/chat/runMethod/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        method: this.getNodeParameter("body_method", i),
                                        options: this.getNodeParameter("body_options", i),
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
                    case "Client": {
                        switch (operation) {
                            case "getClientGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientAcceptInvite": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientArchiveChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientCreateGroup": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/createGroup/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        title: this.getNodeParameter("body_title", i),
                                        participants: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_participants", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetBlockedContacts": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getBlockedContacts/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetChatById": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientGetChatLabels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getChatLabels/${sessionId}`;
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
                            case "getClientGetChats": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientGetChats": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getChats/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        searchOptions: this.getNodeParameter("body_searchOptions", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetChatsByLabelId": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getChatsByLabelId/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        labelId: this.getNodeParameter("body_labelId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetCommonGroups": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getCommonGroups/${sessionId}`;
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
                            case "postClientGetContactById": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getClientGetContacts": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientGetInviteInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getInviteInfo/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        displayName: this.getNodeParameter("body_displayName", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetLabelById": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getLabelById/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        labelId: this.getNodeParameter("body_labelId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetLabels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getLabels/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientAddOrRemoveLabels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/addOrRemoveLabels/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        labelIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_labelIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        chatIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_chatIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetNumberId": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientIsRegisteredUser": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientGetProfilePicUrl": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getProfilePicUrl/${sessionId}`;
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
                            case "getClientGetState": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getState/${sessionId}`;
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
                            case "postClientMarkChatUnread": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/markChatUnread/${sessionId}`;
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
                            case "postClientMuteChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/muteChat/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        unmuteDate: this.getNodeParameter("body_unmuteDate", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientPinChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/pinChat/${sessionId}`;
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
                            case "postClientSearchMessages": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/searchMessages/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        query: this.getNodeParameter("body_query", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSendMessage": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/sendMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        contentType: this.getNodeParameter("body_contentType", i),
                                        content: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_content", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSendPresenceAvailable": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/sendPresenceAvailable/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSendPresenceUnavailable": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/sendPresenceUnavailable/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSendSeen": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/sendSeen/${sessionId}`;
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
                            case "postClientSetDisplayName": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setDisplayName/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        pictureMimetype: this.getNodeParameter("body_pictureMimetype", i),
                                        pictureData: this.getNodeParameter("body_pictureData", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetProfilePicture": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setProfilePicture/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        pictureMimetype: this.getNodeParameter("body_pictureMimetype", i),
                                        pictureData: this.getNodeParameter("body_pictureData", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetStatus": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postClientUnarchiveChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/unarchiveChat/${sessionId}`;
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
                            case "postClientUnmuteChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/unmuteChat/${sessionId}`;
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
                            case "postClientUnpinChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/unpinChat/${sessionId}`;
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
                            case "getClientGetWWebVersion": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getWWebVersion/${sessionId}`;
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
                            case "deleteClientDeleteProfilePicture": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/deleteProfilePicture/${sessionId}`;
                                const options = {
                                    method: "DELETE",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetAutoDownloadAudio": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setAutoDownloadAudio/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        flag: this.getNodeParameter("body_flag", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetAutoDownloadDocuments": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setAutoDownloadDocuments/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        flag: this.getNodeParameter("body_flag", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetAutoDownloadPhotos": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setAutoDownloadPhotos/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        flag: this.getNodeParameter("body_flag", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetAutoDownloadVideos": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setAutoDownloadVideos/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        flag: this.getNodeParameter("body_flag", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSyncHistory": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/syncHistory/${sessionId}`;
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
                            case "postClientGetContactDeviceCount": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getContactDeviceCount/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        userId: this.getNodeParameter("body_userId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetCountryCode": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getCountryCode/${sessionId}`;
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
                            case "postClientGetFormattedNumber": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getFormattedNumber/${sessionId}`;
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
                            case "postClientOpenChatWindow": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/openChatWindow/${sessionId}`;
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
                            case "postClientOpenChatWindowAt": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/openChatWindowAt/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientResetState": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/resetState/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSetBackgroundSync": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/setBackgroundSync/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        flag: this.getNodeParameter("body_flag", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetContactLidAndPhone": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getContactLidAndPhone/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        userIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_userIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientGetChannelByInviteCode": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getChannelByInviteCode/${sessionId}`;
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
                            case "getClientGetChannels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/getChannels/${sessionId}`;
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
                            case "postClientCreateChannel": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/createChannel/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        title: this.getNodeParameter("body_title", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSubscribeToChannel": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/subscribeToChannel/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        channelId: this.getNodeParameter("body_channelId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientUnsubscribeFromChannel": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/unsubscribeFromChannel/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        channelId: this.getNodeParameter("body_channelId", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientSearchChannels": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/searchChannels/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        searchOptions: this.getNodeParameter("body_searchOptions", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postClientRunMethod": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/client/runMethod/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        method: this.getNodeParameter("body_method", i),
                                        options: this.getNodeParameter("body_options", i),
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
                    case "Contact": {
                        switch (operation) {
                            case "postContactGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getClassInfo/${sessionId}`;
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
                            case "postContactBlock": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/block/${sessionId}`;
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
                            case "postContactGetAbout": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getAbout/${sessionId}`;
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
                            case "postContactGetChat": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getChat/${sessionId}`;
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
                            case "postContactUnblock": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/unblock/${sessionId}`;
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
                            case "postContactGetFormattedNumber": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getFormattedNumber/${sessionId}`;
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
                            case "postContactGetCountryCode": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getCountryCode/${sessionId}`;
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
                            case "postContactGetProfilePicUrl": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getProfilePicUrl/${sessionId}`;
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
                            case "postContactGetCommonGroups": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/contact/getCommonGroups/${sessionId}`;
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
                    case "GroupChat": {
                        switch (operation) {
                            case "postGroupChatGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/getClassInfo/${sessionId}`;
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
                            case "postGroupChatAddParticipants": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/addParticipants/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        participantIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_participantIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatDemoteParticipants": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/demoteParticipants/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        participantIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_participantIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatGetInviteCode": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/getInviteCode/${sessionId}`;
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
                            case "postGroupChatLeave": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/leave/${sessionId}`;
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
                            case "postGroupChatPromoteParticipants": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/promoteParticipants/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        participantIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_participantIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatRemoveParticipants": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/removeParticipants/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        participantIds: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_participantIds", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatRevokeInvite": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/revokeInvite/${sessionId}`;
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
                            case "postGroupChatSetDescription": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/setDescription/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        description: this.getNodeParameter("body_description", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatSetInfoAdminsOnly": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/setInfoAdminsOnly/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        adminsOnly: this.getNodeParameter("body_adminsOnly", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatSetMessagesAdminsOnly": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/setMessagesAdminsOnly/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        adminsOnly: this.getNodeParameter("body_adminsOnly", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatSetSubject": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/setSubject/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        subject: this.getNodeParameter("body_subject", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatSetPicture": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/setPicture/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        pictureMimeType: this.getNodeParameter("body_pictureMimeType", i),
                                        pictureData: this.getNodeParameter("body_pictureData", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatDeletePicture": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/deletePicture/${sessionId}`;
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
                            case "postGroupChatGetGroupMembershipRequests": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/getGroupMembershipRequests/${sessionId}`;
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
                            case "postGroupChatApproveGroupMembershipRequests": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/approveGroupMembershipRequests/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatRejectGroupMembershipRequests": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/rejectGroupMembershipRequests/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postGroupChatRunMethod": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/groupChat/runMethod/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        method: this.getNodeParameter("body_method", i),
                                        options: this.getNodeParameter("body_options", i),
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
                            case "postMessageGetClassInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getClassInfo/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageDelete": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/delete/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        everyone: this.getNodeParameter("body_everyone", i),
                                        clearMedia: this.getNodeParameter("body_clearMedia", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageDownloadMedia": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/downloadMedia/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageDownloadMediaAsData": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/downloadMediaAsData/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageForward": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/forward/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        destinationChatId: this.getNodeParameter("body_destinationChatId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetInfo": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getInfo/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetMentions": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getMentions/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetOrder": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getOrder/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetPayment": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getPayment/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetQuotedMessage": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getQuotedMessage/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageReact": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/react/${sessionId}`;
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
                            case "postMessageReply": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/reply/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        contentType: this.getNodeParameter("body_contentType", i),
                                        content: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_content", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageStar": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/star/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageUnstar": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/unstar/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetReactions": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getReactions/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetGroupMentions": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getGroupMentions/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageEdit": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/edit/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        content: this.getNodeParameter("body_content", i),
                                        options: (() => { try {
                                            return JSON.parse(this.getNodeParameter("body_options", i));
                                        }
                                        catch {
                                            return {};
                                        } })(),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageGetContact": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/getContact/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                    },
                                    returnFullResponse: false,
                                    json: true,
                                };
                                responseData = await this.helpers.httpRequest(options);
                                break;
                            }
                            case "postMessageRunMethod": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
                                const endpoint = `/message/runMethod/${sessionId}`;
                                const options = {
                                    method: "POST",
                                    url: `${baseUrl}${endpoint}`,
                                    headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
                                    body: {
                                        chatId: this.getNodeParameter("body_chatId", i),
                                        messageId: this.getNodeParameter("body_messageId", i),
                                        method: this.getNodeParameter("body_method", i),
                                        options: this.getNodeParameter("body_options", i),
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
                            case "getSessionGetSessions": {
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
                            case "getSessionStart": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionStop": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionQr": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionQrImage": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "postSessionRequestPairingCode": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionRestart": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionTerminate": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            case "getSessionTerminateInactive": {
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
                            case "getSessionTerminateAll": {
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
                            case "getSessionGetPageScreenshot": {
                                const sessionIdParam = this.getNodeParameter("sessionId", i);
                                const sessionId = sessionIdParam.value || "default";
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
                            default:
                                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Operação não suportada: ${operation}`);
                        }
                        break;
                    }
                    case "Various": {
                        switch (operation) {
                            case "getPing": {
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
                            case "postLocalCallbackExample": {
                                const endpoint = `/localCallbackExample`;
                                const options = {
                                    method: "POST",
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