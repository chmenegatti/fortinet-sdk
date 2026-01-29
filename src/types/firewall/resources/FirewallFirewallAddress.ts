// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallAddress {
  name?: string;
  uuid?: string;
  subnet?: string;
  type?: 'ipmask' | 'iprange' | 'fqdn' | 'geography' | 'wildcard' | 'dynamic' | 'interface-subnet' | 'mac' | 'route-tag';
  "route-tag"?: number;
  "sub-type"?: 'sdn' | 'clearpass-spt' | 'fsso' | 'ems-tag' | 'fortivoice-tag' | 'fortinac-tag' | 'fortipolicy-tag' | 'swc-tag' | 'device-identification';
  "clearpass-spt"?: 'unknown' | 'healthy' | 'quarantine' | 'checkup' | 'transient' | 'infected';
  macaddr?: Record<string, unknown>[];
  "start-ip"?: string;
  "end-ip"?: string;
  fqdn?: string;
  country?: string;
  "wildcard-fqdn"?: string;
  "cache-ttl"?: number;
  wildcard?: string;
  sdn?: string;
  "fsso-group"?: Record<string, unknown>[];
  "interface"?: string;
  tenant?: string;
  organization?: string;
  "epg-name"?: string;
  "subnet-name"?: string;
  "sdn-tag"?: string;
  "policy-group"?: string;
  "obj-tag"?: string;
  "obj-type"?: 'ip' | 'mac';
  "tag-detection-level"?: string;
  "tag-type"?: string;
  "hw-vendor"?: string;
  "hw-model"?: string;
  os?: string;
  "sw-version"?: string;
  comment?: string;
  "associated-interface"?: string;
  color?: number;
  filter?: string;
  "sdn-addr-type"?: 'private' | 'public' | 'all';
  "node-ip-only"?: 'enable' | 'disable';
  "obj-id"?: string;
  list?: Record<string, unknown>[];
  tagging?: Record<string, unknown>[];
  "allow-routing"?: 'enable' | 'disable';
  "fabric-object"?: 'enable' | 'disable';
}
