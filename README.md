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

## Exemplos Completos

### Criar IP Pool

```typescript
// IP Pool para SNAT (Source NAT)
const ippool = await client.firewall.firewallIppool.create({
  name: 'POOL_WAN1',
  type: 'overload',  // overload, one-to-one, fixed-port-range, port-block-allocation
  startip: '200.100.50.10',
  endip: '200.100.50.20',
  arpReply: 'enable',
  comments: 'Pool para NAT de saída WAN1'
});
```

### Criar Address

```typescript
// Endereço único (host)
const host = await client.firewall.firewallAddress.create({
  name: 'SRV_WEB_01',
  type: 'ipmask',
  subnet: '192.168.10.50/32',
  comment: 'Servidor Web Produção'
});

// Subnet
const subnet = await client.firewall.firewallAddress.create({
  name: 'NET_DMZ',
  type: 'ipmask',
  subnet: '172.16.0.0/24',
  comment: 'Rede DMZ'
});

// Range de IPs
const range = await client.firewall.firewallAddress.create({
  name: 'RANGE_DHCP',
  type: 'iprange',
  startIp: '192.168.1.100',
  endIp: '192.168.1.200',
  comment: 'Pool DHCP'
});

// FQDN
const fqdn = await client.firewall.firewallAddress.create({
  name: 'DOMAIN_EXAMPLE',
  type: 'fqdn',
  fqdn: 'example.com',
  comment: 'Domínio externo'
});

// Grupo de endereços
const addrgroup = await client.firewall.firewallAddrgrp.create({
  name: 'GRP_SERVIDORES',
  member: [
    { name: 'SRV_WEB_01' },
    { name: 'SRV_DB_01' },
    { name: 'SRV_APP_01' }
  ],
  comment: 'Grupo de servidores produção'
});
```

### Criar Service

```typescript
// Serviço TCP customizado
const svcTcp = await client.firewall.firewallServiceCustom.create({
  name: 'TCP_8080',
  protocol: 'TCP/UDP/SCTP',
  tcpPortrange: '8080',
  comment: 'Aplicação web porta 8080'
});

// Serviço UDP
const svcUdp = await client.firewall.firewallServiceCustom.create({
  name: 'UDP_5060',
  protocol: 'TCP/UDP/SCTP',
  udpPortrange: '5060',
  comment: 'SIP'
});

// Serviço com múltiplas portas
const svcMulti = await client.firewall.firewallServiceCustom.create({
  name: 'WEB_CUSTOM',
  protocol: 'TCP/UDP/SCTP',
  tcpPortrange: '8080 8443 9000-9010',
  comment: 'Portas web customizadas'
});

// Grupo de serviços
const svcgroup = await client.firewall.firewallServiceGroup.create({
  name: 'GRP_WEB_SERVICES',
  member: [
    { name: 'HTTP' },
    { name: 'HTTPS' },
    { name: 'TCP_8080' }
  ],
  comment: 'Serviços web'
});
```

### Criar VIP (Virtual IP)

```typescript
// VIP estático (DNAT - port forward)
const vip = await client.firewall.firewallVip.create({
  name: 'VIP_WEB_SERVER',
  type: 'static-nat',
  extip: '200.100.50.5',
  extintf: 'wan1',
  mappedip: [{ range: '192.168.10.50' }],
  comment: 'NAT para servidor web interno'
});

// VIP com port forward
const vipPort = await client.firewall.firewallVip.create({
  name: 'VIP_SSH_SERVER',
  type: 'static-nat',
  extip: '200.100.50.5',
  extintf: 'wan1',
  mappedip: [{ range: '192.168.10.50' }],
  extport: '2222',
  mappedport: '22',
  protocol: 'tcp',
  comment: 'SSH port forward 2222→22'
});

// VIP com load balance
const vipLb = await client.firewall.firewallVip.create({
  name: 'VIP_WEB_FARM',
  type: 'load-balance',
  extip: '200.100.50.10',
  extintf: 'wan1',
  serverType: 'http',
  ldbMethod: 'round-robin',
  realservers: [
    { ip: '192.168.10.51', port: 80, status: 'active', weight: 1 },
    { ip: '192.168.10.52', port: 80, status: 'active', weight: 1 },
    { ip: '192.168.10.53', port: 80, status: 'active', weight: 1 }
  ],
  comment: 'Load balancer web farm'
});

// Grupo de VIPs
const vipgroup = await client.firewall.firewallVipgrp.create({
  name: 'GRP_PUBLIC_SERVERS',
  member: [
    { name: 'VIP_WEB_SERVER' },
    { name: 'VIP_SSH_SERVER' }
  ],
  comment: 'Servidores públicos'
});
```

### Criar SNAT (Central SNAT Map)

```typescript
// SNAT simples com IP Pool
const snat = await client.firewall.firewallCentralSnatMap.create({
  policyid: 1,
  status: 'enable',
  type: 'ippool',
  origAddr: [{ name: 'NET_LAN' }],
  dstAddr: [{ name: 'all' }],
  srcintf: [{ name: 'internal' }],
  dstintf: [{ name: 'wan1' }],
  ippool: [{ name: 'POOL_WAN1' }],
  comment: 'SNAT para LAN via WAN1'
});

// SNAT com múltiplas redes
const snatMulti = await client.firewall.firewallCentralSnatMap.create({
  policyid: 2,
  status: 'enable',
  type: 'ippool',
  origAddr: [
    { name: 'NET_DMZ' },
    { name: 'NET_SERVERS' }
  ],
  dstAddr: [{ name: 'all' }],
  srcintf: [{ name: 'dmz' }],
  dstintf: [{ name: 'wan1' }],
  ippool: [{ name: 'POOL_WAN1' }],
  comment: 'SNAT DMZ e Servidores'
});

// SNAT com fixed port (preserve source port)
const snatFixed = await client.firewall.firewallCentralSnatMap.create({
  policyid: 3,
  status: 'enable',
  type: 'fixed-port',
  origAddr: [{ name: 'SRV_APP_01' }],
  dstAddr: [{ name: 'all' }],
  srcintf: [{ name: 'internal' }],
  dstintf: [{ name: 'wan1' }],
  natIppool: [{ name: 'POOL_APP' }],
  comment: 'SNAT com porta fixa para aplicação'
});
```

### Exemplo Completo: Cenário Real

```typescript
import { FortiGateClient } from 'fortinet-sdk';

const client = new FortiGateClient({
  baseUrl: 'https://firewall.empresa.com',
  auth: { accessToken: process.env.FORTIGATE_TOKEN }
});

async function setupWebServer() {
  try {
    // 1. Criar endereço do servidor interno
    const server = await client.firewall.firewallAddress.create({
      name: 'SRV_WEB_PROD',
      type: 'ipmask',
      subnet: '10.0.10.100/32',
      comment: 'Servidor web produção'
    });

    // 2. Criar serviços customizados
    const svcHTTPS = await client.firewall.firewallServiceCustom.create({
      name: 'HTTPS_8443',
      protocol: 'TCP/UDP/SCTP',
      tcpPortrange: '8443'
    });

    // 3. Criar IP Pool para SNAT
    const pool = await client.firewall.firewallIppool.create({
      name: 'POOL_WEB_OUT',
      type: 'overload',
      startip: '200.100.50.100',
      endip: '200.100.50.100'
    });

    // 4. Criar VIP para acesso externo (DNAT)
    const vip = await client.firewall.firewallVip.create({
      name: 'VIP_WEB_HTTPS',
      type: 'static-nat',
      extip: '200.100.50.10',
      extintf: 'wan1',
      mappedip: [{ range: '10.0.10.100' }],
      portforward: 'enable',
      protocol: 'tcp',
      extport: '443',
      mappedport: '8443'
    });

    // 5. Criar SNAT para tráfego de saída do servidor
    const snat = await client.firewall.firewallCentralSnatMap.create({
      policyid: 10,
      status: 'enable',
      type: 'ippool',
      origAddr: [{ name: 'SRV_WEB_PROD' }],
      dstAddr: [{ name: 'all' }],
      srcintf: [{ name: 'internal' }],
      dstintf: [{ name: 'wan1' }],
      ippool: [{ name: 'POOL_WEB_OUT' }]
    });

    // 6. Criar política de firewall inbound (usando o VIP)
    const policyIn = await client.firewall.firewallPolicy.create({
      policyid: 100,
      name: 'ALLOW_WEB_INBOUND',
      srcintf: [{ name: 'wan1' }],
      dstintf: [{ name: 'internal' }],
      srcaddr: [{ name: 'all' }],
      dstaddr: [{ name: 'VIP_WEB_HTTPS' }],
      service: [{ name: 'HTTPS' }],
      action: 'accept',
      schedule: 'always',
      status: 'enable',
      logtraffic: 'all'
    });

    // 7. Criar política de firewall outbound
    const policyOut = await client.firewall.firewallPolicy.create({
      policyid: 101,
      name: 'ALLOW_WEB_OUTBOUND',
      srcintf: [{ name: 'internal' }],
      dstintf: [{ name: 'wan1' }],
      srcaddr: [{ name: 'SRV_WEB_PROD' }],
      dstaddr: [{ name: 'all' }],
      service: [{ name: 'HTTP' }, { name: 'HTTPS' }],
      action: 'accept',
      schedule: 'always',
      natinbound: 'disable',
      natoutbound: 'enable',
      status: 'enable'
    });

    console.log('✅ Configuração completa do servidor web criada!');
    return {
      server,
      pool,
      vip,
      snat,
      policies: [policyIn, policyOut]
    };

  } catch (error) {
    console.error('❌ Erro:', error.message);
    throw error;
  }
}

setupWebServer();
```


