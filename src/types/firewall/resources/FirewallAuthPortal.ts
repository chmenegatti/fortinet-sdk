// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAuthPortal {
  groups?: Array<{
      name?: string;
    }>;
  portalAddr?: string;
  portalAddr6?: string;
  identityBasedRoute?: string;
  proxyAuth?: "enable" | "disable";
}
