# n8n-nodes-wwebjsapi

Node n8n para integração completa com a [WWebJS API](https://github.com/avoylenko/wwebjs-api) — um wrapper REST para o WhatsApp Web JS.

## 🚀 Instalação

```bash
# No diretório do n8n
npm install n8n-nodes-wwebjsapi
```

Ou via interface do n8n: **Settings → Community Nodes → Install**

---

## ⚙️ Configuração

1. No n8n, crie uma credencial do tipo **WWebJS API Credentials**
2. Preencha:
   - **Base URL**: URL do seu servidor WWebJS (ex: `http://localhost:3000`)
   - **API Key**: valor da variável `API_KEY` configurada no servidor

---

## 📋 Operações disponíveis

O node é gerado automaticamente a partir do `swagger.json` da API. As operações são organizadas por categoria:

### Session
| Operação | Descrição |
|---|---|
| Get all sessions | Lista todas as sessões ativas |
| Start session | Inicia uma nova sessão |
| Stop session | Para uma sessão |
| Get session status | Status atual da sessão |
| Get session QR code | Dados do QR code |
| Get QR code as image | QR code como imagem PNG |
| Request pairing code | Autenticar via código de pareamento |
| Restart session | Reinicia a sessão |
| Terminate session | Encerra a sessão |
| Terminate inactive sessions | Encerra todas sessões inativas |
| Terminate all sessions | Encerra todas as sessões |
| Get page screenshot | Screenshot do browser |

### Client
| Operação | Descrição |
|---|---|
| Get connection info | Informações da conexão atual |
| Accept group invite | Aceita convite de grupo |
| Archive chat | Arquiva um chat |
| Create group | Cria um grupo |
| Get all chats | Lista todos os chats |
| Get all contacts | Lista todos os contatos |
| Get number ID | Obtém WID de um número |
| Send message | Envia mensagem de texto |
| Send media from URL | Envia mídia por URL |
| Set status message | Define mensagem de status |
| Check if user is registered | Verifica se número está no WhatsApp |
| Get chat by ID | Detalhes de um chat |
| Get contact by ID | Detalhes de um contato |

### Message
| Operação | Descrição |
|---|---|
| Get messages from chat | Lista mensagens de um chat |
| Delete message | Deleta uma mensagem |
| React to message | Reage com emoji |
| Star message | Marca/desmarca mensagem como favorita |

---

## 🔄 Atualizar para nova versão da API

O node é **gerado automaticamente** a partir do `swagger.json`. Para atualizar:

```bash
# Opção 1: Script automático
bash scripts/update-swagger.sh

# Opção 2: Manual
curl -o swagger.json https://raw.githubusercontent.com/avoylenko/wwebjs-api/refs/heads/main/swagger.json
node scripts/generate-from-swagger.js
npm run build
```

---

## 🛠️ Desenvolvimento

```bash
# Clone e instale
git clone <repo>
cd n8n-nodes-wwebjsapi
npm install

# Gerar a partir do swagger atual
npm run generate

# Compilar
npm run build

# Desenvolver com watch
npm run dev
```

---

## 📁 Estrutura do projeto

```
n8n-nodes-wwebjsapi/
├── swagger.json                    # ← Atualize este arquivo para novas versões
├── scripts/
│   ├── generate-from-swagger.js   # Gerador automático do node
│   └── update-swagger.sh          # Script de atualização completa
├── nodes/
│   └── WWebjsApi/
│       ├── WWebjsApi.node.ts      # ← GERADO AUTOMATICAMENTE
│       └── wwebjs.svg
├── credentials/
│   └── WWebjsApiCredentials.credentials.ts
├── package.json
└── tsconfig.json
```

> ⚠️ **Não edite** `WWebjsApi.node.ts` diretamente — ele é regerado a cada atualização.

---

## 📄 Licença

MIT
