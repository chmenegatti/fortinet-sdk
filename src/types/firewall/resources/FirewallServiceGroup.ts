// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallServiceGroup {
  name?: string;
  uuid?: string;
  proxy?: "enable" | "disable";
  member?: Array<{
      name?: string;
    }>;
  comment?: string;
  color?: number;
  fabricObject?: "enable" | "disable";
}
