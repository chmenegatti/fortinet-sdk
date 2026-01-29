// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSniffer {
  id?: number;
  uuid?: string;
  status?: "enable" | "disable";
  logtraffic?: "all" | "utm" | "disable";
  ipv6?: "enable" | "disable";
  nonIp?: "enable" | "disable";
  interface?: string;
  host?: string;
  port?: string;
  protocol?: string;
  vlan?: string;
  applicationListStatus?: "enable" | "disable";
  applicationList?: string;
  ipsSensorStatus?: "enable" | "disable";
  ipsSensor?: string;
  dsri?: "enable" | "disable";
  avProfileStatus?: "enable" | "disable";
  avProfile?: string;
  webfilterProfileStatus?: "enable" | "disable";
  webfilterProfile?: string;
  emailfilterProfileStatus?: "enable" | "disable";
  emailfilterProfile?: string;
  dlpProfileStatus?: "enable" | "disable";
  dlpProfile?: string;
  ipThreatfeedStatus?: "enable" | "disable";
  ipThreatfeed?: Array<{
      name?: string;
    }>;
  fileFilterProfileStatus?: "enable" | "disable";
  fileFilterProfile?: string;
  ipsDosStatus?: "enable" | "disable";
  anomaly?: Array<{
      name?: string;
      status?: "disable" | "enable";
      log?: "enable" | "disable";
      action?: "pass" | "block";
      quarantine?: "none" | "attacker";
      quarantineExpiry?: string;
      quarantineLog?: "disable" | "enable";
      threshold?: number;
      "threshold(default)"?: number;
    }>;
}
