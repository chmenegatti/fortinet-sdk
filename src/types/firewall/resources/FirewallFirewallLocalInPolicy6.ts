// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallLocalInPolicy6 {
  policyid?: number;
  uuid?: string;
  intf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  dstaddr?: Record<string, unknown>[];
  "internet-service6-src"?: 'enable' | 'disable';
  "internet-service6-src-name"?: Record<string, unknown>[];
  "internet-service6-src-group"?: Record<string, unknown>[];
  "internet-service6-src-custom"?: Record<string, unknown>[];
  "internet-service6-src-custom-group"?: Record<string, unknown>[];
  "dstaddr-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  service?: Record<string, unknown>[];
  "service-negate"?: 'enable' | 'disable';
  "internet-service6-src-negate"?: 'enable' | 'disable';
  schedule?: string;
  status?: 'enable' | 'disable';
  "virtual-patch"?: 'enable' | 'disable';
  comments?: string;
}
