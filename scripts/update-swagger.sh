#!/bin/bash
# ============================================================
# update-swagger.sh
# Baixa o swagger mais recente e regenera o node n8n
# ============================================================
set -e

SWAGGER_URL="https://raw.githubusercontent.com/avoylenko/wwebjs-api/refs/heads/main/swagger.json"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$ROOT_DIR"

# ── 1. Baixar swagger ─────────────────────────────────────
echo "🔄 Baixando swagger atualizado..."
if curl -sf "$SWAGGER_URL" -o swagger.json; then
  echo "✅ swagger.json atualizado"
else
  echo "❌ Falha ao baixar swagger. Verificar conexão ou URL."
  exit 1
fi

# ── 2. Garantir dependências instaladas ────────────────────
echo ""
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/tsc" ]; then
  echo "📦 Instalando dependências..."
  npm install
else
  echo "✅ Dependências já instaladas"
fi

# ── 3. Gerar código do node ────────────────────────────────
echo ""
echo "⚙️  Gerando código do node..."
node scripts/generate-from-swagger.js

# ── 4. Compilar TypeScript via tsc local ──────────────────
echo ""
echo "🔨 Compilando TypeScript..."
./node_modules/.bin/tsc
echo "✅ Compilação concluída → dist/"

# ── Sumário ────────────────────────────────────────────────
echo ""
echo "🎉 Node atualizado com sucesso!"
echo ""
echo "   Para instalar no n8n (link local de desenvolvimento):"
echo "   npm link"
echo "   cd ~/.n8n/custom && npm link n8n-nodes-wwebjsapi"
