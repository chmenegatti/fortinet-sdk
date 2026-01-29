// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSslSshProfile {
  name?: string;
  comment?: string;
  ssl?: Array<{
      inspectAll?: "disable" | "certificate-inspection" | "deep-inspection";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
      certProbeFailure?: "allow" | "block";
      encryptedClientHello?: "allow" | "block";
      minAllowedSslVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
    }>;
  https?: Array<{
      ports?: number;
      status?: "disable" | "certificate-inspection" | "deep-inspection";
      quic?: "inspect" | "bypass" | "block";
      proxyAfterTcpHandshake?: "enable" | "disable";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
      certProbeFailure?: "allow" | "block";
      encryptedClientHello?: "allow" | "block";
      minAllowedSslVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
    }>;
  ftps?: Array<{
      ports?: number;
      status?: "disable" | "deep-inspection";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
      minAllowedSslVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
    }>;
  imaps?: Array<{
      ports?: number;
      status?: "disable" | "deep-inspection";
      proxyAfterTcpHandshake?: "enable" | "disable";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
    }>;
  pop3s?: Array<{
      ports?: number;
      status?: "disable" | "deep-inspection";
      proxyAfterTcpHandshake?: "enable" | "disable";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
    }>;
  smtps?: Array<{
      ports?: number;
      status?: "disable" | "deep-inspection";
      proxyAfterTcpHandshake?: "enable" | "disable";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
    }>;
  ssh?: Array<{
      ports?: number;
      status?: "disable" | "deep-inspection";
      inspectAll?: "disable" | "deep-inspection";
      proxyAfterTcpHandshake?: "enable" | "disable";
      unsupportedVersion?: "bypass" | "block";
      sshTunPolicyCheck?: "disable" | "enable";
      sshAlgorithm?: "compatible" | "high-encryption";
    }>;
  dot?: Array<{
      status?: "disable" | "deep-inspection";
      quic?: "inspect" | "bypass" | "block";
      proxyAfterTcpHandshake?: "enable" | "disable";
      clientCertificate?: "bypass" | "inspect" | "block";
      unsupportedSslVersion?: "allow" | "block";
      unsupportedSslCipher?: "allow" | "block";
      unsupportedSslNegotiation?: "allow" | "block";
      expiredServerCert?: "allow" | "block" | "ignore";
      revokedServerCert?: "allow" | "block" | "ignore";
      untrustedServerCert?: "allow" | "block" | "ignore";
      certValidationTimeout?: "allow" | "block" | "ignore";
      certValidationFailure?: "allow" | "block" | "ignore";
      sniServerCertCheck?: "enable" | "strict" | "disable";
    }>;
  allowlist?: "enable" | "disable";
  blockBlocklistedCertificates?: "disable" | "enable";
  sslExempt?: Array<{
      id?: number;
      type?: "fortiguard-category" | "address" | "address6" | "wildcard-fqdn" | "regex";
      fortiguardCategory?: number;
      address?: string;
      address6?: string;
      wildcardFqdn?: string;
      regex?: string;
    }>;
  echOuterSni?: Array<{
      name?: string;
      sni?: string;
    }>;
  serverCertMode?: "re-sign" | "replace";
  useSslServer?: "disable" | "enable";
  caname?: string;
  untrustedCaname?: string;
  serverCert?: Array<{
      name?: string;
    }>;
  sslServer?: Array<{
      id?: number;
      ip?: string;
      httpsClientCertificate?: "bypass" | "inspect" | "block";
      smtpsClientCertificate?: "bypass" | "inspect" | "block";
      pop3sClientCertificate?: "bypass" | "inspect" | "block";
      imapsClientCertificate?: "bypass" | "inspect" | "block";
      ftpsClientCertificate?: "bypass" | "inspect" | "block";
      sslOtherClientCertificate?: "bypass" | "inspect" | "block";
    }>;
  sslExemptionIpRating?: "enable" | "disable";
  sslExemptionLog?: "disable" | "enable";
  sslAnomalyLog?: "disable" | "enable";
  sslNegotiationLog?: "disable" | "enable";
  sslServerCertLog?: "disable" | "enable";
  sslHandshakeLog?: "disable" | "enable";
  rpcOverHttps?: "enable" | "disable";
  mapiOverHttps?: "enable" | "disable";
  supportedAlpn?: "http1-1" | "http2" | "all" | "none";
}
