// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallLocalInPolicy {
  policyid?: number;
  uuid?: string;
  "ha-mgmt-intf-only"?: 'enable' | 'disable';
  intf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  dstaddr?: Record<string, unknown>[];
  "internet-service-src"?: 'enable' | 'disable';
  "internet-service-src-name"?: Record<string, unknown>[];
  "internet-service-src-group"?: Record<string, unknown>[];
  "internet-service-src-custom"?: Record<string, unknown>[];
  "internet-service-src-custom-group"?: Record<string, unknown>[];
  "dstaddr-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  service?: Record<string, unknown>[];
  "service-negate"?: 'enable' | 'disable';
  "internet-service-src-negate"?: 'enable' | 'disable';
  schedule?: string;
  status?: 'enable' | 'disable';
  "virtual-patch"?: 'enable' | 'disable';
  comments?: string;
}
