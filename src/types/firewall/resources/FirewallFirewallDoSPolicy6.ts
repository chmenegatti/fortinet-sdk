// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallDoSPolicy6 {
  policyid?: number;
  status?: 'enable' | 'disable';
  name?: string;
  comments?: string;
  "interface"?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  anomaly?: Record<string, unknown>[];
}
