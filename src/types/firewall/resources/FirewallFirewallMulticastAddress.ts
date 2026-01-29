// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallMulticastAddress {
  name?: string;
  type?: 'multicastrange' | 'broadcastmask';
  subnet?: string;
  "start-ip"?: string;
  "end-ip"?: string;
  comment?: string;
  "associated-interface"?: string;
  color?: number;
  tagging?: Record<string, unknown>[];
}
