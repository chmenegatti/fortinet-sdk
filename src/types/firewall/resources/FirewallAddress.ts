// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAddress {
  name?: string;
  uuid?: string;
  subnet?: string;
  type?: "ipmask" | "iprange" | "fqdn" | "geography" | "wildcard" | "dynamic" | "interface-subnet" | "mac" | "route-tag";
  routeTag?: number;
  subType?: "sdn" | "clearpass-spt" | "fsso" | "ems-tag" | "fortivoice-tag" | "fortinac-tag" | "fortipolicy-tag" | "swc-tag" | "device-identification";
  clearpassSpt?: "unknown" | "healthy" | "quarantine" | "checkup" | "transient" | "infected";
  macaddr?: Array<{
      macaddr?: string;
    }>;
  startIp?: string;
  endIp?: string;
  fqdn?: string;
  country?: string;
  wildcardFqdn?: string;
  cacheTtl?: number;
  wildcard?: string;
  sdn?: string;
  fssoGroup?: Array<{
      name?: string;
    }>;
  interface?: string;
  tenant?: string;
  organization?: string;
  epgName?: string;
  subnetName?: string;
  sdnTag?: string;
  policyGroup?: string;
  objTag?: string;
  objType?: "ip" | "mac";
  tagDetectionLevel?: string;
  tagType?: string;
  hwVendor?: string;
  hwModel?: string;
  os?: string;
  swVersion?: string;
  comment?: string;
  associatedInterface?: string;
  color?: number;
  filter?: string;
  sdnAddrType?: "private" | "public" | "all";
  nodeIpOnly?: "enable" | "disable";
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
  allowRouting?: "enable" | "disable";
  fabricObject?: "enable" | "disable";
}
