// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallDecryptedTrafficMirror {
  name?: string;
  dstmac?: string;
  "traffic-type"?: 'ssl' | 'ssh';
  "traffic-source"?: 'client' | 'server' | 'both';
  "interface"?: Record<string, unknown>[];
}
