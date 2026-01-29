// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallShaperPerIpShaper {
  name?: string;
  maxBandwidth?: number;
  bandwidthUnit?: "kbps" | "mbps" | "gbps";
  maxConcurrentSession?: number;
  maxConcurrentTcpSession?: number;
  maxConcurrentUdpSession?: number;
  diffservForward?: "enable" | "disable";
  diffservReverse?: "enable" | "disable";
  diffservcodeForward?: string;
  diffservcodeRev?: string;
}
