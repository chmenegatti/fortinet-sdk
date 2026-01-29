// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAddress6 {
  name?: string;
  uuid?: string;
  type?: "ipprefix" | "iprange" | "fqdn" | "geography" | "dynamic" | "template" | "mac" | "route-tag";
  routeTag?: number;
  macaddr?: Array<{
      macaddr?: string;
    }>;
  sdn?: string;
  ip6?: string;
  startIp?: string;
  endIp?: string;
  fqdn?: string;
  country?: string;
  cacheTtl?: number;
  color?: number;
  objId?: string;
  list?: Array<{
      ip?: string;
    }>;
  tagging?: Array<{
      name?: string;
      category?: string;
      tags?: Array<{
          name?: string;
        }>;
    }>;
  comment?: string;
  template?: string;
  subnetSegment?: Array<{
      name?: string;
      type?: "any" | "specific";
      value?: string;
    }>;
  hostType?: "any" | "specific";
  host?: string;
  tenant?: string;
  epgName?: string;
  sdnTag?: string;
  filter?: string;
  sdnAddrType?: "private" | "public" | "all";
  fabricObject?: "enable" | "disable";
}
