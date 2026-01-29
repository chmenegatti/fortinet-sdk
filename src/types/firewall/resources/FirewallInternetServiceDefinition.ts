// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInternetServiceDefinition {
  id?: number;
  entry?: Array<{
      seqNum?: number;
      categoryId?: number;
      name?: string;
      protocol?: number;
      portRange?: Array<{
          id?: number;
          startPort?: number;
          endPort?: number;
        }>;
    }>;
}
