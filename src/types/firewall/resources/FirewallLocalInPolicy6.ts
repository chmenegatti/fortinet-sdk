// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallLocalInPolicy6 {
  policyid?: number;
  uuid?: string;
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
  internetService6Src?: "enable" | "disable";
  internetService6SrcName?: Array<{
      name?: string;
    }>;
  internetService6SrcGroup?: Array<{
      name?: string;
    }>;
  internetService6SrcCustom?: Array<{
      name?: string;
    }>;
  internetService6SrcCustomGroup?: Array<{
      name?: string;
    }>;
  dstaddrNegate?: "enable" | "disable";
  action?: "accept" | "deny";
  service?: Array<{
      name?: string;
    }>;
  serviceNegate?: "enable" | "disable";
  internetService6SrcNegate?: "enable" | "disable";
  schedule?: string;
  status?: "enable" | "disable";
  virtualPatch?: "enable" | "disable";
  comments?: string;
}
