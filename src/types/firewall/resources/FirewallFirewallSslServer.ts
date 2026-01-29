// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallSslServer {
  name?: string;
  ip?: string;
  port?: number;
  "ssl-mode"?: 'half' | 'full';
  "add-header-x-forwarded-proto"?: 'enable' | 'disable';
  "mapped-port"?: number;
  "ssl-cert"?: Record<string, unknown>[];
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048';
  "ssl-algorithm"?: 'high' | 'medium' | 'low';
  "ssl-client-renegotiation"?: 'allow' | 'deny' | 'secure';
  "ssl-min-version"?: 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-max-version"?: 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "url-rewrite"?: 'enable' | 'disable';
}
