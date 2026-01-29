// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallShaperPerIpShaper {
  name?: string;
  "max-bandwidth"?: number;
  "bandwidth-unit"?: 'kbps' | 'mbps' | 'gbps';
  "max-concurrent-session"?: number;
  "max-concurrent-tcp-session"?: number;
  "max-concurrent-udp-session"?: number;
  "diffserv-forward"?: 'enable' | 'disable';
  "diffserv-reverse"?: 'enable' | 'disable';
  "diffservcode-forward"?: string;
  "diffservcode-rev"?: string;
}
