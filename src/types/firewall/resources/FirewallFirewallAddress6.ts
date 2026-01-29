// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallAddress6 {
  name?: string;
  uuid?: string;
  type?: 'ipprefix' | 'iprange' | 'fqdn' | 'geography' | 'dynamic' | 'template' | 'mac' | 'route-tag';
  "route-tag"?: number;
  macaddr?: Record<string, unknown>[];
  sdn?: string;
  ip6?: string;
  "start-ip"?: string;
  "end-ip"?: string;
  fqdn?: string;
  country?: string;
  "cache-ttl"?: number;
  color?: number;
  "obj-id"?: string;
  list?: Record<string, unknown>[];
  tagging?: Record<string, unknown>[];
  comment?: string;
  template?: string;
  "subnet-segment"?: Record<string, unknown>[];
  "host-type"?: 'any' | 'specific';
  host?: string;
  tenant?: string;
  "epg-name"?: string;
  "sdn-tag"?: string;
  filter?: string;
  "sdn-addr-type"?: 'private' | 'public' | 'all';
  "fabric-object"?: 'enable' | 'disable';
}
