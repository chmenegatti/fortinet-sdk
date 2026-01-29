// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallShapingPolicy {
  id?: number;
  uuid?: string;
  name?: string;
  comment?: string;
  status?: "enable" | "disable";
  ipVersion?: "4" | "6";
  trafficType?: "forwarding" | "local-in" | "local-out";
  srcaddr?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  srcaddr6?: Array<{
      name?: string;
    }>;
  dstaddr6?: Array<{
      name?: string;
    }>;
  internetService?: "enable" | "disable";
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
  service?: Array<{
      name?: string;
    }>;
  schedule?: string;
  users?: Array<{
      name?: string;
    }>;
  groups?: Array<{
      name?: string;
    }>;
  application?: Array<{
      id?: number;
    }>;
  appCategory?: Array<{
      id?: number;
    }>;
  appGroup?: Array<{
      name?: string;
    }>;
  urlCategory?: Array<{
      id?: number;
    }>;
  srcintf?: Array<{
      name?: string;
    }>;
  dstintf?: Array<{
      name?: string;
    }>;
  tosMask?: string;
  tos?: string;
  tosNegate?: "enable" | "disable";
  trafficShaper?: string;
  trafficShaperReverse?: string;
  perIpShaper?: string;
  classId?: number;
  diffservForward?: "enable" | "disable";
  diffservReverse?: "enable" | "disable";
  diffservcodeForward?: string;
  diffservcodeRev?: string;
  cosMask?: string;
  cos?: string;
}
