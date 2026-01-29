// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallLdbMonitor {
  name?: string;
  type?: "ping" | "tcp" | "http" | "https" | "dns";
  interval?: number;
  timeout?: number;
  retry?: number;
  port?: number;
  srcIp?: string;
  httpGet?: string;
  httpMatch?: string;
  httpMaxRedirects?: number;
  dnsProtocol?: "udp" | "tcp";
  dnsRequestDomain?: string;
  dnsMatchIp?: string;
}
