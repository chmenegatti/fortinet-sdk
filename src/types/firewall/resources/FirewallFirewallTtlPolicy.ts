// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallTtlPolicy {
  id?: number;
  status?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  srcintf?: string;
  srcaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  schedule?: string;
  ttl?: string;
}
