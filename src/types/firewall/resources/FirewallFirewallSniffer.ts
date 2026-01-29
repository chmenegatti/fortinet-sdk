// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallSniffer {
  id?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  logtraffic?: 'all' | 'utm' | 'disable';
  ipv6?: 'enable' | 'disable';
  "non-ip"?: 'enable' | 'disable';
  "interface"?: string;
  host?: string;
  port?: string;
  protocol?: string;
  vlan?: string;
  "application-list-status"?: 'enable' | 'disable';
  "application-list"?: string;
  "ips-sensor-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  dsri?: 'enable' | 'disable';
  "av-profile-status"?: 'enable' | 'disable';
  "av-profile"?: string;
  "webfilter-profile-status"?: 'enable' | 'disable';
  "webfilter-profile"?: string;
  "emailfilter-profile-status"?: 'enable' | 'disable';
  "emailfilter-profile"?: string;
  "dlp-profile-status"?: 'enable' | 'disable';
  "dlp-profile"?: string;
  "ip-threatfeed-status"?: 'enable' | 'disable';
  "ip-threatfeed"?: Record<string, unknown>[];
  "file-filter-profile-status"?: 'enable' | 'disable';
  "file-filter-profile"?: string;
  "ips-dos-status"?: 'enable' | 'disable';
  anomaly?: Record<string, unknown>[];
}
