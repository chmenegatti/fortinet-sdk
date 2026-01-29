// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallMulticastPolicy {
  id?: number;
  uuid?: string;
  name?: string;
  comments?: string;
  status?: 'enable' | 'disable';
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  snat?: 'enable' | 'disable';
  "snat-ip"?: string;
  dnat?: string;
  action?: 'accept' | 'deny';
  protocol?: number;
  "start-port"?: number;
  "end-port"?: number;
  "utm-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "auto-asic-offload"?: 'enable' | 'disable';
  "traffic-shaper"?: string;
}
