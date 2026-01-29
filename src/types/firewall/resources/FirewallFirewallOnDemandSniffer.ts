// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallOnDemandSniffer {
  name?: string;
  "interface"?: string;
  "max-packet-count"?: number;
  hosts?: Record<string, unknown>[];
  ports?: Record<string, unknown>[];
  protocols?: Record<string, unknown>[];
  "non-ip-packet"?: 'enable' | 'disable';
  "advanced-filter"?: string;
}
