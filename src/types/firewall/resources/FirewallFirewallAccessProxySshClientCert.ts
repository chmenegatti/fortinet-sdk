// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallAccessProxySshClientCert {
  name?: string;
  "source-address"?: 'enable' | 'disable';
  "permit-x11-forwarding"?: 'enable' | 'disable';
  "permit-agent-forwarding"?: 'enable' | 'disable';
  "permit-port-forwarding"?: 'enable' | 'disable';
  "permit-pty"?: 'enable' | 'disable';
  "permit-user-rc"?: 'enable' | 'disable';
  "cert-extension"?: Record<string, unknown>[];
  "auth-ca"?: string;
}
