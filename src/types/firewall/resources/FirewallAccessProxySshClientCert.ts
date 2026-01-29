// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAccessProxySshClientCert {
  name?: string;
  sourceAddress?: "enable" | "disable";
  permitX11Forwarding?: "enable" | "disable";
  permitAgentForwarding?: "enable" | "disable";
  permitPortForwarding?: "enable" | "disable";
  permitPty?: "enable" | "disable";
  permitUserRc?: "enable" | "disable";
  certExtension?: Array<{
      name?: string;
      critical?: "no" | "yes";
      type?: "fixed" | "user";
      data?: string;
    }>;
  authCa?: string;
}
