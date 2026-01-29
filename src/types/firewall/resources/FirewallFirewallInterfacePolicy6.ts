// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallInterfacePolicy6 {
  policyid?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  comments?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "interface"?: string;
  srcaddr6?: Record<string, unknown>[];
  dstaddr6?: Record<string, unknown>[];
  service6?: Record<string, unknown>[];
  "application-list-status"?: 'enable' | 'disable';
  "application-list"?: string;
  "ips-sensor-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  dsri?: 'enable' | 'disable';
  "av-profile-status"?: 'enable' | 'disable';
  "av-profile"?: string;
  "webfilter-profile-status"?: 'enable' | 'disable';
  "webfilter-profile"?: string;
  "casb-profile-status"?: 'enable' | 'disable';
  "casb-profile"?: string;
  "emailfilter-profile-status"?: 'enable' | 'disable';
  "emailfilter-profile"?: string;
  "dlp-profile-status"?: 'enable' | 'disable';
  "dlp-profile"?: string;
}
