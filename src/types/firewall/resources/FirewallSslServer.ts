// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSslServer {
  name?: string;
  ip?: string;
  port?: number;
  sslMode?: "half" | "full";
  addHeaderXForwardedProto?: "enable" | "disable";
  mappedPort?: number;
  sslCert?: Array<{
      name?: string;
    }>;
  sslDhBits?: "768" | "1024" | "1536" | "2048";
  sslAlgorithm?: "high" | "medium" | "low";
  sslClientRenegotiation?: "allow" | "deny" | "secure";
  sslMinVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
  sslMaxVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
  sslSendEmptyFrags?: "enable" | "disable";
  urlRewrite?: "enable" | "disable";
}
