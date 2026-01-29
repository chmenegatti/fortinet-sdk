// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInterfacePolicy6 {
  policyid?: number;
  uuid?: string;
  status?: "enable" | "disable";
  comments?: string;
  logtraffic?: "all" | "utm" | "disable";
  interface?: string;
  srcaddr6?: Array<{
      name?: string;
    }>;
  dstaddr6?: Array<{
      name?: string;
    }>;
  service6?: Array<{
      name?: string;
    }>;
  applicationListStatus?: "enable" | "disable";
  applicationList?: string;
  ipsSensorStatus?: "enable" | "disable";
  ipsSensor?: string;
  dsri?: "enable" | "disable";
  avProfileStatus?: "enable" | "disable";
  avProfile?: string;
  webfilterProfileStatus?: "enable" | "disable";
  webfilterProfile?: string;
  casbProfileStatus?: "enable" | "disable";
  casbProfile?: string;
  emailfilterProfileStatus?: "enable" | "disable";
  emailfilterProfile?: string;
  dlpProfileStatus?: "enable" | "disable";
  dlpProfile?: string;
}
