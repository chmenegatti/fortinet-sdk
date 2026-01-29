// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallSslSshProfile {
  name?: string;
  comment?: string;
  ssl?: Record<string, unknown>[];
  https?: Record<string, unknown>[];
  ftps?: Record<string, unknown>[];
  imaps?: Record<string, unknown>[];
  pop3s?: Record<string, unknown>[];
  smtps?: Record<string, unknown>[];
  ssh?: Record<string, unknown>[];
  dot?: Record<string, unknown>[];
  allowlist?: 'enable' | 'disable';
  "block-blocklisted-certificates"?: 'disable' | 'enable';
  "ssl-exempt"?: Record<string, unknown>[];
  "ech-outer-sni"?: Record<string, unknown>[];
  "server-cert-mode"?: 're-sign' | 'replace';
  "use-ssl-server"?: 'disable' | 'enable';
  caname?: string;
  "untrusted-caname"?: string;
  "server-cert"?: Record<string, unknown>[];
  "ssl-server"?: Record<string, unknown>[];
  "ssl-exemption-ip-rating"?: 'enable' | 'disable';
  "ssl-exemption-log"?: 'disable' | 'enable';
  "ssl-anomaly-log"?: 'disable' | 'enable';
  "ssl-negotiation-log"?: 'disable' | 'enable';
  "ssl-server-cert-log"?: 'disable' | 'enable';
  "ssl-handshake-log"?: 'disable' | 'enable';
  "rpc-over-https"?: 'enable' | 'disable';
  "mapi-over-https"?: 'enable' | 'disable';
  "supported-alpn"?: 'http1-1' | 'http2' | 'all' | 'none';
}
