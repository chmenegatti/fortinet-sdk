// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallMulticastPolicy6 {
  id?: number;
  uuid?: string;
  status?: "enable" | "disable";
  name?: string;
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  action?: "accept" | "deny";
  protocol?: number;
  startPort?: number;
  endPort?: number;
  utmStatus?: "enable" | "disable";
  ipsSensor?: string;
  logtraffic?: "all" | "utm" | "disable";
  autoAsicOffload?: "enable" | "disable";
  comments?: string;
}
