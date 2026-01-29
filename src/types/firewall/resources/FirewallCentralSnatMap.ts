// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallCentralSnatMap {
  policyid?: number;
  uuid?: string;
  status?: "enable" | "disable";
  type?: "ipv4" | "ipv6";
  srcintf?: Array<{
      name?: string;
    }>;
  dstintf?: Array<{
      name?: string;
    }>;
  origAddr?: Array<{
      name?: string;
    }>;
  origAddr6?: Array<{
      name?: string;
    }>;
  dstAddr?: Array<{
      name?: string;
    }>;
  dstAddr6?: Array<{
      name?: string;
    }>;
  protocol?: number;
  origPort?: string;
  nat?: "disable" | "enable";
  nat46?: "enable" | "disable";
  nat64?: "enable" | "disable";
  natIppool?: Array<{
      name?: string;
    }>;
  natIppool6?: Array<{
      name?: string;
    }>;
  portPreserve?: "enable" | "disable";
  natPort?: string;
  dstPort?: string;
  comments?: string;
}
