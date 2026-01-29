// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallMulticastPolicy {
  id?: number;
  uuid?: string;
  name?: string;
  comments?: string;
  status?: "enable" | "disable";
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  snat?: "enable" | "disable";
  snatIp?: string;
  dnat?: string;
  action?: "accept" | "deny";
  protocol?: number;
  startPort?: number;
  endPort?: number;
  utmStatus?: "enable" | "disable";
  ipsSensor?: string;
  logtraffic?: "all" | "utm" | "disable";
  autoAsicOffload?: "enable" | "disable";
  trafficShaper?: string;
}
