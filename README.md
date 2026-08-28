# Noyau Autonome MCP Bridge

Sidecar externe pour Noyau Autonome. Principe: **WRAP, DON'T REWRITE**. Le Noyau local reste la source de vérité.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fab777-max/noyau-autonome-mcp)

## Ce dépôt fournit

- API HTTPS `/api/bridge/v1/*`
- stockage persistant du dernier snapshot compact par Brain ID via Durable Object SQLite
- limite stricte de 128 KiB et rejet des clés de type secret/Q-table
- endpoint MCP Streamable HTTP stateless `/mcp`
- six outils MCP en lecture seule: `get_brain_status`, `get_learning_metrics`, `get_skills`, `get_meta2_state`, `get_last_session`, `get_bridge_health`
- aucune commande destructive du Noyau

## Après le premier déploiement Cloudflare

Créer deux Worker secrets différents dans Cloudflare:

- `BRIDGE_READ_TOKEN`
- `BRIDGE_WRITE_TOKEN`

Ne jamais publier les valeurs réelles dans GitHub.

Le déploiement du Bridge ne constitue pas à lui seul une validation physique iPhone ni une validation de connexion ChatGPT.