// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallServiceCustom {
  name?: string;
  uuid?: string;
  proxy?: "enable" | "disable";
  category?: string;
  protocol?: "TCP/UDP/SCTP" | "ICMP" | "ICMP6" | "IP" | "HTTP" | "FTP" | "CONNECT" | "SOCKS-TCP" | "SOCKS-UDP" | "ALL";
  helper?: "auto" | "disable" | "ftp" | "tftp" | "ras" | "h323" | "tns" | "mms" | "sip" | "pptp" | "rtsp" | "dns-udp" | "dns-tcp" | "pmap" | "rsh" | "dcerpc" | "mgcp";
  iprange?: string;
  fqdn?: string;
  protocolNumber?: number;
  icmptype?: number;
  icmpcode?: number;
  tcpPortrange?: string;
  udpPortrange?: string;
  sctpPortrange?: string;
  tcpHalfcloseTimer?: number;
  tcpHalfopenTimer?: number;
  tcpTimewaitTimer?: number;
  tcpRstTimer?: number;
  udpIdleTimer?: number;
  sessionTtl?: string;
  checkResetRange?: "disable" | "strict" | "default";
  comment?: string;
  color?: number;
  appServiceType?: "disable" | "app-id" | "app-category";
  appCategory?: Array<{
      id?: number;
    }>;
  application?: Array<{
      id?: number;
    }>;
  fabricObject?: "enable" | "disable";
}
