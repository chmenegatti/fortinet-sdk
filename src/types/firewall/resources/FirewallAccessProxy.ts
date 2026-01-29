// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAccessProxy {
  name?: string;
  vip?: string;
  clientCert?: "disable" | "enable";
  userAgentDetect?: "disable" | "enable";
  authPortal?: "disable" | "enable";
  authVirtualHost?: string;
  emptyCertAction?: "accept" | "block" | "accept-unmanageable";
  logBlockedTraffic?: "enable" | "disable";
  addVhostDomainToDnsdb?: "enable" | "disable";
  svrPoolMultiplex?: "enable" | "disable";
  svrPoolTtl?: number;
  svrPoolServerMaxRequest?: number;
  svrPoolServerMaxConcurrentRequest?: number;
  decryptedTrafficMirror?: string;
  apiGateway?: Array<{
      id?: number;
      urlMap?: string;
      service?: "http" | "https" | "tcp-forwarding" | "samlsp" | "web-portal" | "saas";
      ldbMethod?: "static" | "round-robin" | "weighted" | "first-alive" | "http-host";
      virtualHost?: string;
      urlMapType?: "sub-string" | "wildcard" | "regex";
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
      realservers?: Array<{
          id?: number;
          addrType?: "ip" | "fqdn";
          address?: string;
          ip?: string;
          domain?: string;
          port?: number;
          mappedport?: string;
          status?: "active" | "standby" | "disable";
          type?: "tcp-forwarding" | "ssh";
          externalAuth?: "enable" | "disable";
          tunnelEncryption?: "enable" | "disable";
          weight?: number;
          httpHost?: string;
          healthCheck?: "disable" | "enable";
          healthCheckProto?: "ping" | "http" | "tcp-connect";
          holddownInterval?: "enable" | "disable";
          translateHost?: "enable" | "disable";
          sshClientCert?: string;
          sshHostKeyValidation?: "disable" | "enable";
          sshHostKey?: Array<{
              name?: string;
            }>;
          verifyCert?: "enable" | "disable";
        }>;
      application?: Array<{
          name?: string;
        }>;
      persistence?: "none" | "http-cookie";
      httpCookieDomainFromHost?: "disable" | "enable";
      httpCookieDomain?: string;
      httpCookiePath?: string;
      httpCookieGeneration?: number;
      httpCookieAge?: number;
      httpCookieShare?: "disable" | "same-ip";
      httpsCookieSecure?: "disable" | "enable";
      samlServer?: string;
      samlRedirect?: "disable" | "enable";
      sslDhBits?: "768" | "1024" | "1536" | "2048" | "3072" | "4096";
      sslAlgorithm?: "high" | "medium" | "low";
      sslCipherSuites?: Array<{
          priority?: number;
          cipher?: "TLS-AES-128-GCM-SHA256" | "TLS-AES-256-GCM-SHA384" | "TLS-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-ECDSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-128-GCM-SHA256" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-AES-128-CBC-SHA" | "TLS-RSA-WITH-AES-256-CBC-SHA" | "TLS-RSA-WITH-AES-128-CBC-SHA256" | "TLS-RSA-WITH-AES-128-GCM-SHA256" | "TLS-RSA-WITH-AES-256-CBC-SHA256" | "TLS-RSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-SEED-CBC-SHA" | "TLS-DHE-DSS-WITH-SEED-CBC-SHA" | "TLS-DHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-DHE-DSS-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-ARIA-256-CBC-SHA384" | "TLS-RSA-WITH-SEED-CBC-SHA" | "TLS-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-RC4-128-SHA" | "TLS-ECDHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-DSS-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-RC4-128-MD5" | "TLS-RSA-WITH-RC4-128-SHA" | "TLS-DHE-RSA-WITH-DES-CBC-SHA" | "TLS-DHE-DSS-WITH-DES-CBC-SHA" | "TLS-RSA-WITH-DES-CBC-SHA";
          versions?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
        }>;
      sslMinVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
      sslMaxVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
      sslRenegotiation?: "enable" | "disable";
      sslVpnWebPortal?: string;
    }>;
  apiGateway6?: Array<{
      id?: number;
      urlMap?: string;
      service?: "http" | "https" | "tcp-forwarding" | "samlsp" | "web-portal" | "saas";
      ldbMethod?: "static" | "round-robin" | "weighted" | "first-alive" | "http-host";
      virtualHost?: string;
      urlMapType?: "sub-string" | "wildcard" | "regex";
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
      realservers?: Array<{
          id?: number;
          addrType?: "ip" | "fqdn";
          address?: string;
          ip?: string;
          domain?: string;
          port?: number;
          mappedport?: string;
          status?: "active" | "standby" | "disable";
          type?: "tcp-forwarding" | "ssh";
          externalAuth?: "enable" | "disable";
          tunnelEncryption?: "enable" | "disable";
          weight?: number;
          httpHost?: string;
          healthCheck?: "disable" | "enable";
          healthCheckProto?: "ping" | "http" | "tcp-connect";
          holddownInterval?: "enable" | "disable";
          translateHost?: "enable" | "disable";
          sshClientCert?: string;
          sshHostKeyValidation?: "disable" | "enable";
          sshHostKey?: Array<{
              name?: string;
            }>;
          verifyCert?: "enable" | "disable";
        }>;
      application?: Array<{
          name?: string;
        }>;
      persistence?: "none" | "http-cookie";
      httpCookieDomainFromHost?: "disable" | "enable";
      httpCookieDomain?: string;
      httpCookiePath?: string;
      httpCookieGeneration?: number;
      httpCookieAge?: number;
      httpCookieShare?: "disable" | "same-ip";
      httpsCookieSecure?: "disable" | "enable";
      samlServer?: string;
      samlRedirect?: "disable" | "enable";
      sslDhBits?: "768" | "1024" | "1536" | "2048" | "3072" | "4096";
      sslAlgorithm?: "high" | "medium" | "low";
      sslCipherSuites?: Array<{
          priority?: number;
          cipher?: "TLS-AES-128-GCM-SHA256" | "TLS-AES-256-GCM-SHA384" | "TLS-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-ECDHE-ECDSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-CHACHA20-POLY1305-SHA256" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-DHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-DHE-RSA-WITH-AES-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA" | "TLS-DHE-DSS-WITH-AES-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-128-GCM-SHA256" | "TLS-DHE-DSS-WITH-AES-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-RSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-AES-256-GCM-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-128-GCM-SHA256" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA" | "TLS-ECDHE-ECDSA-WITH-AES-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-AES-128-CBC-SHA" | "TLS-RSA-WITH-AES-256-CBC-SHA" | "TLS-RSA-WITH-AES-128-CBC-SHA256" | "TLS-RSA-WITH-AES-128-GCM-SHA256" | "TLS-RSA-WITH-AES-256-CBC-SHA256" | "TLS-RSA-WITH-AES-256-GCM-SHA384" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA" | "TLS-DHE-RSA-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-DSS-WITH-CAMELLIA-256-CBC-SHA256" | "TLS-DHE-RSA-WITH-SEED-CBC-SHA" | "TLS-DHE-DSS-WITH-SEED-CBC-SHA" | "TLS-DHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-DHE-DSS-WITH-ARIA-128-CBC-SHA256" | "TLS-DHE-DSS-WITH-ARIA-256-CBC-SHA384" | "TLS-RSA-WITH-SEED-CBC-SHA" | "TLS-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-RSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-ECDSA-WITH-ARIA-128-CBC-SHA256" | "TLS-ECDHE-ECDSA-WITH-ARIA-256-CBC-SHA384" | "TLS-ECDHE-RSA-WITH-RC4-128-SHA" | "TLS-ECDHE-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-DHE-DSS-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-3DES-EDE-CBC-SHA" | "TLS-RSA-WITH-RC4-128-MD5" | "TLS-RSA-WITH-RC4-128-SHA" | "TLS-DHE-RSA-WITH-DES-CBC-SHA" | "TLS-DHE-DSS-WITH-DES-CBC-SHA" | "TLS-RSA-WITH-DES-CBC-SHA";
          versions?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
        }>;
      sslMinVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
      sslMaxVersion?: "tls-1.0" | "tls-1.1" | "tls-1.2" | "tls-1.3";
      sslRenegotiation?: "enable" | "disable";
      sslVpnWebPortal?: string;
    }>;
}
