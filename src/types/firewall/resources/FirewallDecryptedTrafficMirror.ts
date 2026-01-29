// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallDecryptedTrafficMirror {
  name?: string;
  dstmac?: string;
  trafficType?: "ssl" | "ssh";
  trafficSource?: "client" | "server" | "both";
  interface?: Array<{
      name?: string;
    }>;
}
