// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallIdentityBasedRoute {
  name?: string;
  comments?: string;
  rule?: Array<{
      id?: number;
      gateway?: string;
      device?: string;
      groups?: Array<{
          name?: string;
        }>;
    }>;
}
