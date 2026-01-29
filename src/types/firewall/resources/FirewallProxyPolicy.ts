// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallProxyPolicy {
  uuid?: string;
  policyid?: number;
  name?: string;
  proxy?: "explicit-web" | "transparent-web" | "ftp" | "ssh" | "ssh-tunnel" | "access-proxy";
  accessProxy?: Array<{
      name?: string;
    }>;
  accessProxy6?: Array<{
      name?: string;
    }>;
  srcintf?: Array<{
      name?: string;
    }>;
  dstintf?: Array<{
      name?: string;
    }>;
  srcaddr?: Array<{
      name?: string;
    }>;
  poolname?: Array<{
      name?: string;
    }>;
  poolname6?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  ztnaEmsTag?: Array<{
      name?: string;
    }>;
  ztnaTagsMatchLogic?: "or" | "and";
  deviceOwnership?: "enable" | "disable";
  internetService?: "enable" | "disable";
  internetServiceNegate?: "enable" | "disable";
  internetServiceName?: Array<{
      name?: string;
    }>;
  internetServiceGroup?: Array<{
      name?: string;
    }>;
  internetServiceCustom?: Array<{
      name?: string;
    }>;
  internetServiceCustomGroup?: Array<{
      name?: string;
    }>;
  internetService6?: "enable" | "disable";
  internetService6Negate?: "enable" | "disable";
  internetService6Name?: Array<{
      name?: string;
    }>;
  internetService6Group?: Array<{
      name?: string;
    }>;
  internetService6Custom?: Array<{
      name?: string;
    }>;
  internetService6CustomGroup?: Array<{
      name?: string;
    }>;
  service?: Array<{
      name?: string;
    }>;
  srcaddrNegate?: "enable" | "disable";
  dstaddrNegate?: "enable" | "disable";
  serviceNegate?: "enable" | "disable";
  action?: "accept" | "deny" | "redirect";
  status?: "enable" | "disable";
  schedule?: string;
  logtraffic?: "all" | "utm" | "disable";
  sessionTtl?: number;
  srcaddr6?: Array<{
      name?: string;
    }>;
  dstaddr6?: Array<{
      name?: string;
    }>;
  groups?: Array<{
      name?: string;
    }>;
  users?: Array<{
      name?: string;
    }>;
  httpTunnelAuth?: "enable" | "disable";
  sshPolicyRedirect?: "enable" | "disable";
  webproxyForwardServer?: string;
  webproxyProfile?: string;
  transparent?: "enable" | "disable";
  disclaimer?: "disable" | "domain" | "policy" | "user";
  utmStatus?: "enable" | "disable";
  profileType?: "single" | "group";
  profileGroup?: string;
  profileProtocolOptions?: string;
  sslSshProfile?: string;
  avProfile?: string;
  webfilterProfile?: string;
  emailfilterProfile?: string;
  dlpProfile?: string;
  fileFilterProfile?: string;
  ipsSensor?: string;
  applicationList?: string;
  ipsVoipFilter?: string;
  sctpFilterProfile?: string;
  icapProfile?: string;
  cifsProfile?: string;
  videofilterProfile?: string;
  wafProfile?: string;
  sshFilterProfile?: string;
  casbProfile?: string;
  replacemsgOverrideGroup?: string;
  logtrafficStart?: "enable" | "disable";
  comments?: string;
  blockNotification?: "enable" | "disable";
  redirectUrl?: string;
  decryptedTrafficMirror?: string;
  detectHttpsInHttpRequest?: "enable" | "disable";
}
