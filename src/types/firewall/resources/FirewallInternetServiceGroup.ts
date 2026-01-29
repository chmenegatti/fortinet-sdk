// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInternetServiceGroup {
  name?: string;
  comment?: string;
  direction?: "source" | "destination" | "both";
  member?: Array<{
      name?: string;
    }>;
}
