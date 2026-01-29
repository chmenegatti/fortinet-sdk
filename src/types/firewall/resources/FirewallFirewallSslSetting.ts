// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallSslSetting {
  "proxy-connect-timeout"?: number;
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "no-matching-cipher-action"?: 'bypass' | 'drop';
  "cert-cache-capacity"?: number;
  "cert-cache-timeout"?: number;
  "session-cache-capacity"?: number;
  "session-cache-timeout"?: number;
  "kxp-queue-threshold"?: number;
  "ssl-queue-threshold"?: number;
  "abbreviate-handshake"?: 'enable' | 'disable';
}
