// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInternetServiceExtension {
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
      dst?: Array<{
          name?: string;
        }>;
      dst6?: Array<{
          name?: string;
        }>;
    }>;
  disableEntry?: Array<{
      id?: number;
      addrMode?: "ipv4" | "ipv6";
      protocol?: number;
      portRange?: Array<{
          id?: number;
          startPort?: number;
          endPort?: number;
        }>;
      ipRange?: Array<{
          id?: number;
          startIp?: string;
          endIp?: string;
        }>;
      ip6Range?: Array<{
          id?: number;
          startIp6?: string;
          endIp6?: string;
        }>;
    }>;
}
