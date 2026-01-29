// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallAccessProxy6 {
  name?: string;
  vip?: string;
  "client-cert"?: 'disable' | 'enable';
  "user-agent-detect"?: 'disable' | 'enable';
  "auth-portal"?: 'disable' | 'enable';
  "auth-virtual-host"?: string;
  "empty-cert-action"?: 'accept' | 'block' | 'accept-unmanageable';
  "log-blocked-traffic"?: 'enable' | 'disable';
  "add-vhost-domain-to-dnsdb"?: 'enable' | 'disable';
  "svr-pool-multiplex"?: 'enable' | 'disable';
  "svr-pool-ttl"?: number;
  "svr-pool-server-max-request"?: number;
  "svr-pool-server-max-concurrent-request"?: number;
  "decrypted-traffic-mirror"?: string;
  "api-gateway"?: Record<string, unknown>[];
  "api-gateway6"?: Record<string, unknown>[];
}
