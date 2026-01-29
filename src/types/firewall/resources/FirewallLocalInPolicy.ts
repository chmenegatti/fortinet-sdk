// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallLocalInPolicy {
  policyid?: number;
  uuid?: string;
  haMgmtIntfOnly?: "enable" | "disable";
  intf?: Array<{
      name?: string;
    }>;
  srcaddr?: Array<{
      name?: string;
    }>;
  srcaddrNegate?: "enable" | "disable";
  dstaddr?: Array<{
      name?: string;
    }>;
  internetServiceSrc?: "enable" | "disable";
  internetServiceSrcName?: Array<{
      name?: string;
    }>;
  internetServiceSrcGroup?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustom?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustomGroup?: Array<{
      name?: string;
    }>;
  dstaddrNegate?: "enable" | "disable";
  action?: "accept" | "deny";
  service?: Array<{
      name?: string;
    }>;
  serviceNegate?: "enable" | "disable";
  internetServiceSrcNegate?: "enable" | "disable";
  schedule?: string;
  status?: "enable" | "disable";
  virtualPatch?: "enable" | "disable";
  comments?: string;
}
