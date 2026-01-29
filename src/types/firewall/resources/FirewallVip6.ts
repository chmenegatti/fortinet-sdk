// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallVip6 {
  name?: string;
  id?: number;
  uuid?: string;
  comment?: string;
  type?: "static-nat" | "server-load-balance" | "access-proxy";
  srcFilter?: Array<{
      range?: string;
    }>;
  srcVipFilter?: "disable" | "enable";
  extip?: string;
  mappedip?: string;
  natSourceVip?: "disable" | "enable";
  ndpReply?: "disable" | "enable";
  portforward?: "disable" | "enable";
  protocol?: "tcp" | "udp" | "sctp";
  extport?: string;
  mappedport?: string;
  color?: number;
  ldbMethod?: "static" | "round-robin" | "weighted" | "least-session" | "least-rtt" | "first-alive" | "http-host";
  serverType?: "http" | "https" | "imaps" | "pop3s" | "smtps" | "ssl" | "tcp" | "udp" | "ip";
  httpRedirect?: "enable" | "disable";
  persistence?: "none" | "http-cookie" | "ssl-session-id";
  h2Support?: "enable" | "disable";
  h3Support?: "enable" | "disable";
  quic?: Array<{
      maxIdleTimeout?: number;
      maxUdpPayloadSize?: number;
      activeConnectionIdLimit?: number;
      ackDelayExponent?: number;
      maxAckDelay?: number;
      maxDatagramFrameSize?: number;
      activeMigration?: "enable" | "disable";
      greaseQuicBit?: "enable" | "disable";
    }>;
  nat66?: "disable" | "enable";
  nat64?: "disable" | "enable";
  addNat64Route?: "disable" | "enable";
  realservers?: Array<{
      id?: number;
      ip?: string;
      port?: number;
      status?: "active" | "standby" | "disable";
      weight?: number;
      holddownInterval?: number;
      healthcheck?: "disable" | "enable" | "vip";
      httpHost?: string;
      translateHost?: "enable" | "disable";
      maxConnections?: number;
      monitor?: Array<{
          name?: string;
        }>;
      clientIp?: string;
    }>;
  httpCookieDomainFromHost?: "disable" | "enable";
  httpCookieDomain?: string;
  httpCookiePath?: string;
  httpCookieGeneration?: number;
  httpCookieAge?: number;
  httpCookieShare?: "disable" | "same-ip";
  httpsCookieSecure?: "disable" | "enable";
  httpMultiplex?: "enable" | "disable";
  httpIpHeader?: "enable" | "disable";
  httpIpHeaderName?: string;
  outlookWebAccess?: "disable" | "enable";
  weblogicServer?: "disable" | "enable";
  websphereServer?: "disable" | "enable";
  sslMode?: "half" | "full";
  sslCertificate?: Array<{
      name?: string;
    }>;
  sslDhBits?: "768" | "1024" | "1536" | "2048" | "3072" | "4096";
  sslAlgorithm?: "high" | "medium" | "low" | "custom";
  sslCipherSuites?: Array<{
      priority?: number;
      cipher?: "TLS-AES-128-GCM-SHA256" | "TLS-AES-256-GCM-SHA384" | "TLS-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-ECDSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-128-GCM-SHA256" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-AES-128-CBC-SHA" | "TLS-RSA-WITH-AES-256-CBC-SHA" | "TLS-RSA-WITH-AES-128-CBC-SHA256" | "TLS-RSA-WITH-AES-128-GCM-SHA256" | "TLS-RSA-WITH-AES-256-CBC-SHA256" | "TLS-RSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-SEED-CBC-SHA" | "TLS-DHE-DSS-WITH-SEED-CBC-SHA" | "TLS-DHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-DHE-DSS-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-ARIA-256-CBC-SHA384" | "TLS-RSA-WITH-SEED-CBC-SHA" | "TLS-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-RC4-128-SHA" | "TLS-ECDHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-DSS-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-RC4-128-MD5" | "TLS-RSA-WITH-RC4-128-SHA" | "TLS-DHE-RSA-WITH-DES-CBC-SHA" | "TLS-DHE-DSS-WITH-DES-CBC-SHA" | "TLS-RSA-WITH-DES-CBC-SHA";
      versions?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
    }>;
  sslServerRenegotiation?: "enable" | "disable";
  sslServerAlgorithm?: "high" | "medium" | "low" | "custom" | "client";
  sslServerCipherSuites?: Array<{
      priority?: number;
      cipher?: "TLS-AES-128-GCM-SHA256" | "TLS-AES-256-GCM-SHA384" | "TLS-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-ECDSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-128-GCM-SHA256" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-AES-128-CBC-SHA" | "TLS-RSA-WITH-AES-256-CBC-SHA" | "TLS-RSA-WITH-AES-128-CBC-SHA256" | "TLS-RSA-WITH-AES-128-GCM-SHA256" | "TLS-RSA-WITH-AES-256-CBC-SHA256" | "TLS-RSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-SEED-CBC-SHA" | "TLS-DHE-DSS-WITH-SEED-CBC-SHA" | "TLS-DHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-DHE-DSS-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-ARIA-256-CBC-SHA384" | "TLS-RSA-WITH-SEED-CBC-SHA" | "TLS-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-RC4-128-SHA" | "TLS-ECDHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-DSS-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-RC4-128-MD5" | "TLS-RSA-WITH-RC4-128-SHA" | "TLS-DHE-RSA-WITH-DES-CBC-SHA" | "TLS-DHE-DSS-WITH-DES-CBC-SHA" | "TLS-RSA-WITH-DES-CBC-SHA";
      versions?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
    }>;
  sslPfs?: "require" | "deny" | "allow";
  sslMinVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
  sslMaxVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
  sslServerMinVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3" | "client";
  sslServerMaxVersion?: "ssl-3.0" | "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3" | "client";
  sslAcceptFfdheGroups?: "enable" | "disable";
  sslSendEmptyFrags?: "enable" | "disable";
  sslClientFallback?: "disable" | "enable";
  sslClientRenegotiation?: "allow" | "deny" | "secure";
  sslClientSessionStateType?: "disable" | "time" | "count" | "both";
  sslClientSessionStateTimeout?: number;
  sslClientSessionStateMax?: number;
  sslClientRekeyCount?: number;
  sslServerSessionStateType?: "disable" | "time" | "count" | "both";
  sslServerSessionStateTimeout?: number;
  sslServerSessionStateMax?: number;
  sslHttpLocationConversion?: "enable" | "disable";
  sslHttpMatchHost?: "enable" | "disable";
  sslHpkp?: "disable" | "enable" | "report-only";
  sslHpkpPrimary?: string;
  sslHpkpBackup?: string;
  sslHpkpAge?: number;
  sslHpkpReportUri?: string;
  sslHpkpIncludeSubdomains?: "disable" | "enable";
  sslHsts?: "disable" | "enable";
  sslHstsAge?: number;
  sslHstsIncludeSubdomains?: "disable" | "enable";
  monitor?: Array<{
      name?: string;
    }>;
  maxEmbryonicConnections?: number;
  embeddedIpv4Address?: "disable" | "enable";
  ipv4Mappedip?: string;
  ipv4Mappedport?: string;
}
