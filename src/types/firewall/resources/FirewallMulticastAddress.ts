// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallMulticastAddress {
  name?: string;
  type?: "multicastrange" | "broadcastmask";
  subnet?: string;
  startIp?: string;
  endIp?: string;
  comment?: string;
  associatedInterface?: string;
  color?: number;
  tagging?: Array<{
      name?: string;
      category?: string;
      tags?: Array<{
          name?: string;
        }>;
    }>;
}
