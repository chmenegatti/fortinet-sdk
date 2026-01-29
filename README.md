# FortiOS 7.4.10 Firewall SDK

TypeScript SDK para integração com a API do FortiGate (FortiOS v7.4.10).

## Instalação

```bash
npm install
```

## Build

```bash
npm run build
```

## Uso

```typescript
import { FortiGateClient } from 'fortinet-sdk';

const client = new FortiGateClient({
  baseUrl: 'https://your-fortigate.com',
  auth: {
    accessToken: 'your-api-token'
  }
});

// Listar políticas de firewall
const policies = await client.firewall.firewallPolicy.getAll();

// Criar endereço de firewall
const address = await client.firewall.firewallAddress.create({
  name: 'myserver',
  subnet: '192.168.1.100/32'
});

// Acesso dinâmico a qualquer recurso
const vips = await client.firewall.resource('firewallVip').getAll();
```

## Recursos

- ✅ Todos os endpoints `firewall/*` do FortiOS 7.4.10
- ✅ Tipos TypeScript completos gerados a partir do swagger
- ✅ Conversão automática camelCase ↔ kebab-case
- ✅ Autenticação via API Token ou Session Cookie
- ✅ Tratamento de erros padronizado

## Estrutura

- `src/client.ts` - Cliente base com autenticação e interceptors
- `src/resources/firewall/` - Recursos de firewall (90+ endpoints)
- `src/types/firewall/` - DTOs gerados do swagger
- `src/utils/` - Utilitários de conversão e mapeamento

## Opções do Cliente

```typescript
const client = new FortiGateClient({
  baseUrl: 'https://your-fortigate.com',
  auth: {
    accessToken: 'token',
    useAccessTokenInQuery: true // default: true
  },
  timeoutMs: 30000,
  transformRequestKeys: true,  // converte camelCase → kebab-case
  transformResponseKeys: true  // converte kebab-case → camelCase
});
```
