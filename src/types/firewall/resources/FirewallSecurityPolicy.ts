// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSecurityPolicy {
  uuid?: string;
  policyid?: number;
  name?: string;
  comments?: string;
  srcintf?: Array<{
      name?: string;
    }>;
  dstintf?: Array<{
      name?: string;
    }>;
  srcaddr?: Array<{
      name?: string;
    }>;
  srcaddrNegate?: "enable" | "disable";
  dstaddr?: Array<{
      name?: string;
    }>;
  dstaddrNegate?: "enable" | "disable";
  srcaddr6?: Array<{
      name?: string;
    }>;
  srcaddr6Negate?: "enable" | "disable";
  dstaddr6?: Array<{
      name?: string;
    }>;
  dstaddr6Negate?: "enable" | "disable";
  internetService?: "enable" | "disable";
  internetServiceName?: Array<{
      name?: string;
    }>;
  internetServiceNegate?: "enable" | "disable";
  internetServiceGroup?: Array<{
      name?: string;
    }>;
  internetServiceCustom?: Array<{
      name?: string;
    }>;
  internetServiceCustomGroup?: Array<{
      name?: string;
    }>;
  internetServiceSrc?: "enable" | "disable";
  internetServiceSrcName?: Array<{
      name?: string;
    }>;
  internetServiceSrcNegate?: "enable" | "disable";
  internetServiceSrcGroup?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustom?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustomGroup?: Array<{
      name?: string;
    }>;
  internetService6?: "enable" | "disable";
  internetService6Name?: Array<{
      name?: string;
    }>;
  internetService6Negate?: "enable" | "disable";
  internetService6Group?: Array<{
      name?: string;
    }>;
  internetService6Custom?: Array<{
      name?: string;
    }>;
  internetService6CustomGroup?: Array<{
      name?: string;
    }>;
  internetService6Src?: "enable" | "disable";
  internetService6SrcName?: Array<{
      name?: string;
    }>;
  internetService6SrcNegate?: "enable" | "disable";
  internetService6SrcGroup?: Array<{
      name?: string;
    }>;
  internetService6SrcCustom?: Array<{
      name?: string;
    }>;
  internetService6SrcCustomGroup?: Array<{
      name?: string;
    }>;
  enforceDefaultAppPort?: "enable" | "disable";
  service?: Array<{
      name?: string;
    }>;
  serviceNegate?: "enable" | "disable";
  action?: "accept" | "deny";
  sendDenyPacket?: "disable" | "enable";
  schedule?: string;
  status?: "enable" | "disable";
  logtraffic?: "all" | "utm" | "disable";
  learningMode?: "enable" | "disable";
  nat46?: "enable" | "disable";
  nat64?: "enable" | "disable";
  profileType?: "single" | "group";
  profileGroup?: string;
  profileProtocolOptions?: string;
  sslSshProfile?: string;
  avProfile?: string;
  webfilterProfile?: string;
  dnsfilterProfile?: string;
  emailfilterProfile?: string;
  dlpProfile?: string;
  fileFilterProfile?: string;
  ipsSensor?: string;
  applicationList?: string;
  voipProfile?: string;
  ipsVoipFilter?: string;
  sctpFilterProfile?: string;
  diameterFilterProfile?: string;
  virtualPatchProfile?: string;
  icapProfile?: string;
  cifsProfile?: string;
  videofilterProfile?: string;
  sshFilterProfile?: string;
  casbProfile?: string;
  application?: Array<{
      id?: number;
    }>;
  appCategory?: Array<{
      id?: number;
    }>;
  urlCategory?: string;
  appGroup?: Array<{
      name?: string;
    }>;
  groups?: Array<{
      name?: string;
    }>;
  users?: Array<{
      name?: string;
    }>;
  fssoGroups?: Array<{
      name?: string;
    }>;
}
