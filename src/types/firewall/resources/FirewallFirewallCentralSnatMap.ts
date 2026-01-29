// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallCentralSnatMap {
  policyid?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  type?: 'ipv4' | 'ipv6';
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  "orig-addr"?: Record<string, unknown>[];
  "orig-addr6"?: Record<string, unknown>[];
  "dst-addr"?: Record<string, unknown>[];
  "dst-addr6"?: Record<string, unknown>[];
  protocol?: number;
  "orig-port"?: string;
  nat?: 'disable' | 'enable';
  nat46?: 'enable' | 'disable';
  nat64?: 'enable' | 'disable';
  "nat-ippool"?: Record<string, unknown>[];
  "nat-ippool6"?: Record<string, unknown>[];
  "port-preserve"?: 'enable' | 'disable';
  "nat-port"?: string;
  "dst-port"?: string;
  comments?: string;
}
