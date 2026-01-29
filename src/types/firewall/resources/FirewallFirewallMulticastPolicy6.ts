// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallMulticastPolicy6 {
  id?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  name?: string;
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  action?: 'accept' | 'deny';
  protocol?: number;
  "start-port"?: number;
  "end-port"?: number;
  "utm-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "auto-asic-offload"?: 'enable' | 'disable';
  comments?: string;
}
