// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallLdbMonitor {
  name?: string;
  type?: 'ping' | 'tcp' | 'http' | 'https' | 'dns';
  interval?: number;
  timeout?: number;
  retry?: number;
  port?: number;
  "src-ip"?: string;
  "http-get"?: string;
  "http-match"?: string;
  "http-max-redirects"?: number;
  "dns-protocol"?: 'udp' | 'tcp';
  "dns-request-domain"?: string;
  "dns-match-ip"?: string;
}
