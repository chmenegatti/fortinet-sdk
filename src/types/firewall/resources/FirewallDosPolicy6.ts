// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallDosPolicy6 {
  policyid?: number;
  status?: "enable" | "disable";
  name?: string;
  comments?: string;
  interface?: string;
  srcaddr?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  service?: Array<{
      name?: string;
    }>;
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
