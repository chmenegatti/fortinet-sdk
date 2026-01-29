// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallOnDemandSniffer {
  name?: string;
  interface?: string;
  maxPacketCount?: number;
  hosts?: Array<{
      host?: string;
    }>;
  ports?: Array<{
      port?: number;
    }>;
  protocols?: Array<{
      protocol?: number;
    }>;
  nonIpPacket?: "enable" | "disable";
  advancedFilter?: string;
}
