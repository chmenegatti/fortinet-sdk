// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallServiceCustom {
  name?: string;
  uuid?: string;
  proxy?: 'enable' | 'disable';
  category?: string;
  protocol?: 'TCP/UDP/SCTP' | 'ICMP' | 'ICMP6' | 'IP' | 'HTTP' | 'FTP' | 'CONNECT' | 'SOCKS-TCP' | 'SOCKS-UDP' | 'ALL';
  helper?: 'auto' | 'disable' | 'ftp' | 'tftp' | 'ras' | 'h323' | 'tns' | 'mms' | 'sip' | 'pptp' | 'rtsp' | 'dns-udp' | 'dns-tcp' | 'pmap' | 'rsh' | 'dcerpc' | 'mgcp';
  iprange?: string;
  fqdn?: string;
  "protocol-number"?: number;
  icmptype?: number;
  icmpcode?: number;
  "tcp-portrange"?: string;
  "udp-portrange"?: string;
  "sctp-portrange"?: string;
  "tcp-halfclose-timer"?: number;
  "tcp-halfopen-timer"?: number;
  "tcp-timewait-timer"?: number;
  "tcp-rst-timer"?: number;
  "udp-idle-timer"?: number;
  "session-ttl"?: string;
  "check-reset-range"?: 'disable' | 'strict' | 'default';
  comment?: string;
  color?: number;
  "app-service-type"?: 'disable' | 'app-id' | 'app-category';
  "app-category"?: Record<string, unknown>[];
  application?: Record<string, unknown>[];
  "fabric-object"?: 'enable' | 'disable';
}
