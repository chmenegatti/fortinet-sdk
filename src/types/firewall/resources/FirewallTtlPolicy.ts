// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallTtlPolicy {
  id?: number;
  status?: "enable" | "disable";
  action?: "accept" | "deny";
  srcintf?: string;
  srcaddr?: Array<{
      name?: string;
    }>;
  service?: Array<{
      name?: string;
    }>;
  schedule?: string;
  ttl?: string;
}
