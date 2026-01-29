// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInternetServiceAddition {
  id?: number;
  comment?: string;
  entry?: Array<{
      id?: number;
      addrMode?: "ipv4" | "ipv6";
      protocol?: number;
      portRange?: Array<{
          id?: number;
          startPort?: number;
          endPort?: number;
        }>;
    }>;
}
