// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallIpmacbindingSetting {
  bindthroughfw?: 'enable' | 'disable';
  bindtofw?: 'enable' | 'disable';
  undefinedhost?: 'allow' | 'block';
}

export interface FirewallFirewallIpmacbindingTable {
  "seq-num"?: number;
  ip?: string;
  mac?: string;
  name?: string;
  status?: 'enable' | 'disable';
}

export interface FirewallFirewallScheduleGroup {
  name?: string;
  member?: Record<string, unknown>[];
  color?: number;
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallScheduleOnetime {
  name?: string;
  start?: string;
  "start-utc"?: string;
  end?: string;
  "end-utc"?: string;
  color?: number;
  "expiration-days"?: number;
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallScheduleRecurring {
  name?: string;
  start?: string;
  end?: string;
  day?: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'none';
  color?: number;
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallServiceCategory {
  name?: string;
  comment?: string;
  "fabric-object"?: 'enable' | 'disable';
}

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

export interface FirewallFirewallServiceGroup {
  name?: string;
  uuid?: string;
  proxy?: 'enable' | 'disable';
  member?: Record<string, unknown>[];
  comment?: string;
  color?: number;
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallShaperPerIpShaper {
  name?: string;
  "max-bandwidth"?: number;
  "bandwidth-unit"?: 'kbps' | 'mbps' | 'gbps';
  "max-concurrent-session"?: number;
  "max-concurrent-tcp-session"?: number;
  "max-concurrent-udp-session"?: number;
  "diffserv-forward"?: 'enable' | 'disable';
  "diffserv-reverse"?: 'enable' | 'disable';
  "diffservcode-forward"?: string;
  "diffservcode-rev"?: string;
}

export interface FirewallFirewallShaperTrafficShaper {
  name?: string;
  "guaranteed-bandwidth"?: number;
  "maximum-bandwidth"?: number;
  "bandwidth-unit"?: 'kbps' | 'mbps' | 'gbps';
  priority?: 'low' | 'medium' | 'high';
  "per-policy"?: 'disable' | 'enable';
  diffserv?: 'enable' | 'disable';
  diffservcode?: string;
  "dscp-marking-method"?: 'multi-stage' | 'static';
  "exceed-bandwidth"?: number;
  "exceed-dscp"?: string;
  "maximum-dscp"?: string;
  "cos-marking"?: 'enable' | 'disable';
  "cos-marking-method"?: 'multi-stage' | 'static';
  cos?: string;
  "exceed-cos"?: string;
  "maximum-cos"?: string;
  overhead?: number;
  "exceed-class-id"?: number;
}

export interface FirewallFirewallSshHostKey {
  name?: string;
  status?: 'trusted' | 'revoked';
  type?: 'RSA' | 'DSA' | 'ECDSA' | 'ED25519' | 'RSA-CA' | 'DSA-CA' | 'ECDSA-CA' | 'ED25519-CA';
  nid?: '256' | '384' | '521';
  usage?: 'transparent-proxy' | 'access-proxy';
  ip?: string;
  port?: number;
  hostname?: string;
  "public-key"?: string;
}

export interface FirewallFirewallSshLocalCa {
  name?: string;
  password?: string;
  "private-key"?: string;
  "public-key"?: string;
  source?: 'built-in' | 'user';
}

export interface FirewallFirewallSshLocalKey {
  name?: string;
  password?: string;
  "private-key"?: string;
  "public-key"?: string;
  source?: 'built-in' | 'user';
}

export interface FirewallFirewallSshSetting {
  caname?: string;
  "untrusted-caname"?: string;
  "hostkey-rsa2048"?: string;
  "hostkey-dsa1024"?: string;
  "hostkey-ecdsa256"?: string;
  "hostkey-ecdsa384"?: string;
  "hostkey-ecdsa521"?: string;
  "hostkey-ed25519"?: string;
  "host-trusted-checking"?: 'enable' | 'disable';
}

export interface FirewallFirewallSslSetting {
  "proxy-connect-timeout"?: number;
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "no-matching-cipher-action"?: 'bypass' | 'drop';
  "cert-cache-capacity"?: number;
  "cert-cache-timeout"?: number;
  "session-cache-capacity"?: number;
  "session-cache-timeout"?: number;
  "kxp-queue-threshold"?: number;
  "ssl-queue-threshold"?: number;
  "abbreviate-handshake"?: 'enable' | 'disable';
}

export interface FirewallFirewallWildcardFqdnCustom {
  name?: string;
  uuid?: string;
  "wildcard-fqdn"?: string;
  color?: number;
  comment?: string;
}

export interface FirewallFirewallWildcardFqdnGroup {
  name?: string;
  uuid?: string;
  member?: Record<string, unknown>[];
  color?: number;
  comment?: string;
}

export interface FirewallFirewallDoSPolicy {
  policyid?: number;
  status?: 'enable' | 'disable';
  name?: string;
  comments?: string;
  "interface"?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  anomaly?: Record<string, unknown>[];
}

export interface FirewallFirewallDoSPolicy6 {
  policyid?: number;
  status?: 'enable' | 'disable';
  name?: string;
  comments?: string;
  "interface"?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  anomaly?: Record<string, unknown>[];
}

export interface FirewallFirewallAccessProxy {
  name?: string;
  vip?: string;
  "client-cert"?: 'disable' | 'enable';
  "user-agent-detect"?: 'disable' | 'enable';
  "auth-portal"?: 'disable' | 'enable';
  "auth-virtual-host"?: string;
  "empty-cert-action"?: 'accept' | 'block' | 'accept-unmanageable';
  "log-blocked-traffic"?: 'enable' | 'disable';
  "add-vhost-domain-to-dnsdb"?: 'enable' | 'disable';
  "svr-pool-multiplex"?: 'enable' | 'disable';
  "svr-pool-ttl"?: number;
  "svr-pool-server-max-request"?: number;
  "svr-pool-server-max-concurrent-request"?: number;
  "decrypted-traffic-mirror"?: string;
  "api-gateway"?: Record<string, unknown>[];
  "api-gateway6"?: Record<string, unknown>[];
}

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

export interface FirewallFirewallAccessProxyVirtualHost {
  name?: string;
  "ssl-certificate"?: Record<string, unknown>[];
  host?: string;
  "host-type"?: 'sub-string' | 'wildcard';
  "replacemsg-group"?: string;
}

export interface FirewallFirewallAccessProxy6 {
  name?: string;
  vip?: string;
  "client-cert"?: 'disable' | 'enable';
  "user-agent-detect"?: 'disable' | 'enable';
  "auth-portal"?: 'disable' | 'enable';
  "auth-virtual-host"?: string;
  "empty-cert-action"?: 'accept' | 'block' | 'accept-unmanageable';
  "log-blocked-traffic"?: 'enable' | 'disable';
  "add-vhost-domain-to-dnsdb"?: 'enable' | 'disable';
  "svr-pool-multiplex"?: 'enable' | 'disable';
  "svr-pool-ttl"?: number;
  "svr-pool-server-max-request"?: number;
  "svr-pool-server-max-concurrent-request"?: number;
  "decrypted-traffic-mirror"?: string;
  "api-gateway"?: Record<string, unknown>[];
  "api-gateway6"?: Record<string, unknown>[];
}

export interface FirewallFirewallAddress {
  name?: string;
  uuid?: string;
  subnet?: string;
  type?: 'ipmask' | 'iprange' | 'fqdn' | 'geography' | 'wildcard' | 'dynamic' | 'interface-subnet' | 'mac' | 'route-tag';
  "route-tag"?: number;
  "sub-type"?: 'sdn' | 'clearpass-spt' | 'fsso' | 'ems-tag' | 'fortivoice-tag' | 'fortinac-tag' | 'fortipolicy-tag' | 'swc-tag' | 'device-identification';
  "clearpass-spt"?: 'unknown' | 'healthy' | 'quarantine' | 'checkup' | 'transient' | 'infected';
  macaddr?: Record<string, unknown>[];
  "start-ip"?: string;
  "end-ip"?: string;
  fqdn?: string;
  country?: string;
  "wildcard-fqdn"?: string;
  "cache-ttl"?: number;
  wildcard?: string;
  sdn?: string;
  "fsso-group"?: Record<string, unknown>[];
  "interface"?: string;
  tenant?: string;
  organization?: string;
  "epg-name"?: string;
  "subnet-name"?: string;
  "sdn-tag"?: string;
  "policy-group"?: string;
  "obj-tag"?: string;
  "obj-type"?: 'ip' | 'mac';
  "tag-detection-level"?: string;
  "tag-type"?: string;
  "hw-vendor"?: string;
  "hw-model"?: string;
  os?: string;
  "sw-version"?: string;
  comment?: string;
  "associated-interface"?: string;
  color?: number;
  filter?: string;
  "sdn-addr-type"?: 'private' | 'public' | 'all';
  "node-ip-only"?: 'enable' | 'disable';
  "obj-id"?: string;
  list?: Record<string, unknown>[];
  tagging?: Record<string, unknown>[];
  "allow-routing"?: 'enable' | 'disable';
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallAddress6 {
  name?: string;
  uuid?: string;
  type?: 'ipprefix' | 'iprange' | 'fqdn' | 'geography' | 'dynamic' | 'template' | 'mac' | 'route-tag';
  "route-tag"?: number;
  macaddr?: Record<string, unknown>[];
  sdn?: string;
  ip6?: string;
  "start-ip"?: string;
  "end-ip"?: string;
  fqdn?: string;
  country?: string;
  "cache-ttl"?: number;
  color?: number;
  "obj-id"?: string;
  list?: Record<string, unknown>[];
  tagging?: Record<string, unknown>[];
  comment?: string;
  template?: string;
  "subnet-segment"?: Record<string, unknown>[];
  "host-type"?: 'any' | 'specific';
  host?: string;
  tenant?: string;
  "epg-name"?: string;
  "sdn-tag"?: string;
  filter?: string;
  "sdn-addr-type"?: 'private' | 'public' | 'all';
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallAddress6Template {
  name?: string;
  ip6?: string;
  "subnet-segment-count"?: number;
  "subnet-segment"?: Record<string, unknown>[];
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallAddrgrp {
  name?: string;
  type?: 'default' | 'folder';
  category?: 'default' | 'ztna-ems-tag' | 'ztna-geo-tag';
  uuid?: string;
  "allow-routing"?: 'enable' | 'disable';
  member?: Record<string, unknown>[];
  comment?: string;
  exclude?: 'enable' | 'disable';
  "exclude-member"?: Record<string, unknown>[];
  color?: number;
  tagging?: Record<string, unknown>[];
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallAddrgrp6 {
  name?: string;
  uuid?: string;
  color?: number;
  comment?: string;
  member?: Record<string, unknown>[];
  exclude?: 'enable' | 'disable';
  "exclude-member"?: Record<string, unknown>[];
  tagging?: Record<string, unknown>[];
  "fabric-object"?: 'enable' | 'disable';
}

export interface FirewallFirewallAuthPortal {
  groups?: Record<string, unknown>[];
  "portal-addr"?: string;
  "portal-addr6"?: string;
  "identity-based-route"?: string;
  "proxy-auth"?: 'enable' | 'disable';
}

export interface FirewallFirewallCentralSnatMap {
  policyid?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  type?: 'ipv4' | 'ipv6';
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  "orig-addr"?: Record<string, unknown>[];
  "orig-addr6"?: Record<string, unknown>[];
  "dst-addr"?: Record<string, unknown>[];
  "dst-addr6"?: Record<string, unknown>[];
  protocol?: number;
  "orig-port"?: string;
  nat?: 'disable' | 'enable';
  nat46?: 'enable' | 'disable';
  nat64?: 'enable' | 'disable';
  "nat-ippool"?: Record<string, unknown>[];
  "nat-ippool6"?: Record<string, unknown>[];
  "port-preserve"?: 'enable' | 'disable';
  "nat-port"?: string;
  "dst-port"?: string;
  comments?: string;
}

export interface FirewallFirewallCity {
  id?: number;
  name?: string;
}

export interface FirewallFirewallCountry {
  id?: number;
  name?: string;
  region?: Record<string, unknown>[];
}

export interface FirewallFirewallDecryptedTrafficMirror {
  name?: string;
  dstmac?: string;
  "traffic-type"?: 'ssl' | 'ssh';
  "traffic-source"?: 'client' | 'server' | 'both';
  "interface"?: Record<string, unknown>[];
}

export interface FirewallFirewallDnstranslation {
  id?: number;
  src?: string;
  dst?: string;
  netmask?: string;
}

export interface FirewallFirewallGlobal {
  "banned-ip-persistency"?: 'disabled' | 'permanent-only' | 'all';
}

export interface FirewallFirewallIdentityBasedRoute {
  name?: string;
  comments?: string;
  rule?: Record<string, unknown>[];
}

export interface FirewallFirewallInterfacePolicy {
  policyid?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  comments?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "interface"?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
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

export interface FirewallFirewallInternetService {
  id?: number;
  name?: string;
  "icon-id"?: number;
  direction?: 'src' | 'dst' | 'both';
  database?: 'isdb' | 'irdb';
  "ip-range-number"?: number;
  "extra-ip-range-number"?: number;
  "ip-number"?: number;
  "ip6-range-number"?: number;
  "extra-ip6-range-number"?: number;
  singularity?: number;
  obsolete?: number;
}

export interface FirewallFirewallInternetServiceAddition {
  id?: number;
  comment?: string;
  entry?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceAppend {
  "addr-mode"?: 'ipv4' | 'ipv6' | 'both';
  "match-port"?: number;
  "append-port"?: number;
}

export interface FirewallFirewallInternetServiceBotnet {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceCustom {
  name?: string;
  reputation?: number;
  comment?: string;
  entry?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceCustomGroup {
  name?: string;
  comment?: string;
  member?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceDefinition {
  id?: number;
  entry?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceExtension {
  id?: number;
  comment?: string;
  entry?: Record<string, unknown>[];
  "disable-entry"?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceGroup {
  name?: string;
  comment?: string;
  direction?: 'source' | 'destination' | 'both';
  member?: Record<string, unknown>[];
}

export interface FirewallFirewallInternetServiceIpblReason {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceIpblVendor {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceList {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceName {
  name?: string;
  type?: 'default' | 'location';
  "internet-service-id"?: number;
  "country-id"?: number;
  "region-id"?: number;
  "city-id"?: number;
}

export interface FirewallFirewallInternetServiceOwner {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceReputation {
  id?: number;
  description?: string;
}

export interface FirewallFirewallInternetServiceSld {
  id?: number;
  name?: string;
}

export interface FirewallFirewallInternetServiceSubapp {
  id?: number;
  "sub-app"?: Record<string, unknown>[];
}

export interface FirewallFirewallIpTranslation {
  transid?: number;
  type?: 'SCTP';
  startip?: string;
  endip?: string;
  "map-startip"?: string;
}

export interface FirewallFirewallIppool {
  name?: string;
  type?: 'overload' | 'one-to-one' | 'fixed-port-range' | 'port-block-allocation';
  startip?: string;
  endip?: string;
  startport?: number;
  endport?: number;
  "source-startip"?: string;
  "source-endip"?: string;
  "block-size"?: number;
  "port-per-user"?: number;
  "num-blocks-per-user"?: number;
  "pba-timeout"?: number;
  "pba-interim-log"?: number;
  "permit-any-host"?: 'disable' | 'enable';
  "arp-reply"?: 'disable' | 'enable';
  "arp-intf"?: string;
  "associated-interface"?: string;
  comments?: string;
  nat64?: 'disable' | 'enable';
  "add-nat64-route"?: 'disable' | 'enable';
  "subnet-broadcast-in-ippool"?: 'disable' | 'enable';
}

export interface FirewallFirewallIppool6 {
  name?: string;
  startip?: string;
  endip?: string;
  comments?: string;
  nat46?: 'disable' | 'enable';
  "add-nat46-route"?: 'disable' | 'enable';
}

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

export interface FirewallFirewallLocalInPolicy {
  policyid?: number;
  uuid?: string;
  "ha-mgmt-intf-only"?: 'enable' | 'disable';
  intf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  dstaddr?: Record<string, unknown>[];
  "internet-service-src"?: 'enable' | 'disable';
  "internet-service-src-name"?: Record<string, unknown>[];
  "internet-service-src-group"?: Record<string, unknown>[];
  "internet-service-src-custom"?: Record<string, unknown>[];
  "internet-service-src-custom-group"?: Record<string, unknown>[];
  "dstaddr-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  service?: Record<string, unknown>[];
  "service-negate"?: 'enable' | 'disable';
  "internet-service-src-negate"?: 'enable' | 'disable';
  schedule?: string;
  status?: 'enable' | 'disable';
  "virtual-patch"?: 'enable' | 'disable';
  comments?: string;
}

export interface FirewallFirewallLocalInPolicy6 {
  policyid?: number;
  uuid?: string;
  intf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  dstaddr?: Record<string, unknown>[];
  "internet-service6-src"?: 'enable' | 'disable';
  "internet-service6-src-name"?: Record<string, unknown>[];
  "internet-service6-src-group"?: Record<string, unknown>[];
  "internet-service6-src-custom"?: Record<string, unknown>[];
  "internet-service6-src-custom-group"?: Record<string, unknown>[];
  "dstaddr-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  service?: Record<string, unknown>[];
  "service-negate"?: 'enable' | 'disable';
  "internet-service6-src-negate"?: 'enable' | 'disable';
  schedule?: string;
  status?: 'enable' | 'disable';
  "virtual-patch"?: 'enable' | 'disable';
  comments?: string;
}

export interface FirewallFirewallMulticastAddress {
  name?: string;
  type?: 'multicastrange' | 'broadcastmask';
  subnet?: string;
  "start-ip"?: string;
  "end-ip"?: string;
  comment?: string;
  "associated-interface"?: string;
  color?: number;
  tagging?: Record<string, unknown>[];
}

export interface FirewallFirewallMulticastAddress6 {
  name?: string;
  ip6?: string;
  comment?: string;
  color?: number;
  tagging?: Record<string, unknown>[];
}

export interface FirewallFirewallMulticastPolicy {
  id?: number;
  uuid?: string;
  name?: string;
  comments?: string;
  status?: 'enable' | 'disable';
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  snat?: 'enable' | 'disable';
  "snat-ip"?: string;
  dnat?: string;
  action?: 'accept' | 'deny';
  protocol?: number;
  "start-port"?: number;
  "end-port"?: number;
  "utm-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "auto-asic-offload"?: 'enable' | 'disable';
  "traffic-shaper"?: string;
}

export interface FirewallFirewallMulticastPolicy6 {
  id?: number;
  uuid?: string;
  status?: 'enable' | 'disable';
  name?: string;
  srcintf?: string;
  dstintf?: string;
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  action?: 'accept' | 'deny';
  protocol?: number;
  "start-port"?: number;
  "end-port"?: number;
  "utm-status"?: 'enable' | 'disable';
  "ips-sensor"?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "auto-asic-offload"?: 'enable' | 'disable';
  comments?: string;
}

export interface FirewallFirewallNetworkServiceDynamic {
  name?: string;
  sdn?: string;
  comment?: string;
  filter?: string;
}

export interface FirewallFirewallOnDemandSniffer {
  name?: string;
  "interface"?: string;
  "max-packet-count"?: number;
  hosts?: Record<string, unknown>[];
  ports?: Record<string, unknown>[];
  protocols?: Record<string, unknown>[];
  "non-ip-packet"?: 'enable' | 'disable';
  "advanced-filter"?: string;
}

export interface FirewallFirewallPolicy {
  policyid?: number;
  status?: 'enable' | 'disable';
  name?: string;
  uuid?: string;
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  action?: 'accept' | 'deny' | 'ipsec';
  nat64?: 'enable' | 'disable';
  nat46?: 'enable' | 'disable';
  "ztna-status"?: 'enable' | 'disable';
  "ztna-device-ownership"?: 'enable' | 'disable';
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  srcaddr6?: Record<string, unknown>[];
  dstaddr6?: Record<string, unknown>[];
  "ztna-ems-tag"?: Record<string, unknown>[];
  "ztna-ems-tag-secondary"?: Record<string, unknown>[];
  "ztna-tags-match-logic"?: 'or' | 'and';
  "ztna-geo-tag"?: Record<string, unknown>[];
  "internet-service"?: 'enable' | 'disable';
  "internet-service-name"?: Record<string, unknown>[];
  "internet-service-group"?: Record<string, unknown>[];
  "internet-service-custom"?: Record<string, unknown>[];
  "network-service-dynamic"?: Record<string, unknown>[];
  "internet-service-custom-group"?: Record<string, unknown>[];
  "internet-service-src"?: 'enable' | 'disable';
  "internet-service-src-name"?: Record<string, unknown>[];
  "internet-service-src-group"?: Record<string, unknown>[];
  "internet-service-src-custom"?: Record<string, unknown>[];
  "network-service-src-dynamic"?: Record<string, unknown>[];
  "internet-service-src-custom-group"?: Record<string, unknown>[];
  "reputation-minimum"?: number;
  "reputation-direction"?: 'source' | 'destination';
  "src-vendor-mac"?: Record<string, unknown>[];
  "internet-service6"?: 'enable' | 'disable';
  "internet-service6-name"?: Record<string, unknown>[];
  "internet-service6-group"?: Record<string, unknown>[];
  "internet-service6-custom"?: Record<string, unknown>[];
  "internet-service6-custom-group"?: Record<string, unknown>[];
  "internet-service6-src"?: 'enable' | 'disable';
  "internet-service6-src-name"?: Record<string, unknown>[];
  "internet-service6-src-group"?: Record<string, unknown>[];
  "internet-service6-src-custom"?: Record<string, unknown>[];
  "internet-service6-src-custom-group"?: Record<string, unknown>[];
  "reputation-minimum6"?: number;
  "reputation-direction6"?: 'source' | 'destination';
  "rtp-nat"?: 'disable' | 'enable';
  "rtp-addr"?: Record<string, unknown>[];
  "send-deny-packet"?: 'disable' | 'enable';
  "firewall-session-dirty"?: 'check-all' | 'check-new';
  schedule?: string;
  "schedule-timeout"?: 'enable' | 'disable';
  "policy-expiry"?: 'enable' | 'disable';
  "policy-expiry-date"?: string;
  "policy-expiry-date-utc"?: string;
  service?: Record<string, unknown>[];
  "tos-mask"?: string;
  tos?: string;
  "tos-negate"?: 'enable' | 'disable';
  "anti-replay"?: 'enable' | 'disable';
  "tcp-session-without-syn"?: 'all' | 'data-only' | 'disable';
  "geoip-anycast"?: 'enable' | 'disable';
  "geoip-match"?: 'physical-location' | 'registered-location';
  "dynamic-shaping"?: 'enable' | 'disable';
  "passive-wan-health-measurement"?: 'enable' | 'disable';
  "utm-status"?: 'enable' | 'disable';
  "inspection-mode"?: 'proxy' | 'flow';
  "http-policy-redirect"?: 'enable' | 'disable';
  "ssh-policy-redirect"?: 'enable' | 'disable';
  "ztna-policy-redirect"?: 'enable' | 'disable';
  "webproxy-profile"?: string;
  "profile-type"?: 'single' | 'group';
  "profile-group"?: string;
  "profile-protocol-options"?: string;
  "ssl-ssh-profile"?: string;
  "av-profile"?: string;
  "webfilter-profile"?: string;
  "dnsfilter-profile"?: string;
  "emailfilter-profile"?: string;
  "dlp-profile"?: string;
  "file-filter-profile"?: string;
  "ips-sensor"?: string;
  "application-list"?: string;
  "voip-profile"?: string;
  "ips-voip-filter"?: string;
  "sctp-filter-profile"?: string;
  "diameter-filter-profile"?: string;
  "virtual-patch-profile"?: string;
  "icap-profile"?: string;
  "cifs-profile"?: string;
  "videofilter-profile"?: string;
  "waf-profile"?: string;
  "ssh-filter-profile"?: string;
  "casb-profile"?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "logtraffic-start"?: 'enable' | 'disable';
  "capture-packet"?: 'enable' | 'disable';
  "auto-asic-offload"?: 'enable' | 'disable';
  "np-acceleration"?: 'enable' | 'disable';
  "webproxy-forward-server"?: string;
  "traffic-shaper"?: string;
  "traffic-shaper-reverse"?: string;
  "per-ip-shaper"?: string;
  nat?: 'enable' | 'disable';
  "pcp-outbound"?: 'enable' | 'disable';
  "pcp-inbound"?: 'enable' | 'disable';
  "pcp-poolname"?: Record<string, unknown>[];
  "permit-any-host"?: 'enable' | 'disable';
  "permit-stun-host"?: 'enable' | 'disable';
  fixedport?: 'enable' | 'disable';
  "port-preserve"?: 'enable' | 'disable';
  ippool?: 'enable' | 'disable';
  poolname?: Record<string, unknown>[];
  poolname6?: Record<string, unknown>[];
  "session-ttl"?: string;
  "vlan-cos-fwd"?: number;
  "vlan-cos-rev"?: number;
  inbound?: 'enable' | 'disable';
  outbound?: 'enable' | 'disable';
  natinbound?: 'enable' | 'disable';
  natoutbound?: 'enable' | 'disable';
  fec?: 'enable' | 'disable';
  wccp?: 'enable' | 'disable';
  ntlm?: 'enable' | 'disable';
  "ntlm-guest"?: 'enable' | 'disable';
  "ntlm-enabled-browsers"?: Record<string, unknown>[];
  "fsso-agent-for-ntlm"?: string;
  groups?: Record<string, unknown>[];
  users?: Record<string, unknown>[];
  "fsso-groups"?: Record<string, unknown>[];
  "auth-path"?: 'enable' | 'disable';
  disclaimer?: 'enable' | 'disable';
  "email-collect"?: 'enable' | 'disable';
  vpntunnel?: string;
  natip?: string;
  "match-vip"?: 'enable' | 'disable';
  "match-vip-only"?: 'enable' | 'disable';
  "diffserv-copy"?: 'enable' | 'disable';
  "diffserv-forward"?: 'enable' | 'disable';
  "diffserv-reverse"?: 'enable' | 'disable';
  "diffservcode-forward"?: string;
  "diffservcode-rev"?: string;
  "tcp-mss-sender"?: number;
  "tcp-mss-receiver"?: number;
  comments?: string;
  "auth-cert"?: string;
  "auth-redirect-addr"?: string;
  "redirect-url"?: string;
  "identity-based-route"?: string;
  "block-notification"?: 'enable' | 'disable';
  "custom-log-fields"?: Record<string, unknown>[];
  "replacemsg-override-group"?: string;
  "srcaddr-negate"?: 'enable' | 'disable';
  "srcaddr6-negate"?: 'enable' | 'disable';
  "dstaddr-negate"?: 'enable' | 'disable';
  "dstaddr6-negate"?: 'enable' | 'disable';
  "service-negate"?: 'enable' | 'disable';
  "internet-service-negate"?: 'enable' | 'disable';
  "internet-service-src-negate"?: 'enable' | 'disable';
  "internet-service6-negate"?: 'enable' | 'disable';
  "internet-service6-src-negate"?: 'enable' | 'disable';
  "timeout-send-rst"?: 'enable' | 'disable';
  "captive-portal-exempt"?: 'enable' | 'disable';
  "decrypted-traffic-mirror"?: string;
  dsri?: 'enable' | 'disable';
  "radius-mac-auth-bypass"?: 'enable' | 'disable';
  "delay-tcp-npu-session"?: 'enable' | 'disable';
  "vlan-filter"?: string;
  "sgt-check"?: 'enable' | 'disable';
  sgt?: Record<string, unknown>[];
}

export interface FirewallFirewallProfileGroup {
  name?: string;
  "profile-protocol-options"?: string;
  "ssl-ssh-profile"?: string;
  "av-profile"?: string;
  "webfilter-profile"?: string;
  "dnsfilter-profile"?: string;
  "emailfilter-profile"?: string;
  "dlp-profile"?: string;
  "file-filter-profile"?: string;
  "ips-sensor"?: string;
  "application-list"?: string;
  "voip-profile"?: string;
  "ips-voip-filter"?: string;
  "sctp-filter-profile"?: string;
  "diameter-filter-profile"?: string;
  "virtual-patch-profile"?: string;
  "icap-profile"?: string;
  "cifs-profile"?: string;
  "videofilter-profile"?: string;
  "waf-profile"?: string;
  "ssh-filter-profile"?: string;
  "casb-profile"?: string;
}

export interface FirewallFirewallProfileProtocolOptions {
  name?: string;
  comment?: string;
  "replacemsg-group"?: string;
  "oversize-log"?: 'disable' | 'enable';
  "switching-protocols-log"?: 'disable' | 'enable';
  http?: Record<string, unknown>[];
  ftp?: Record<string, unknown>[];
  imap?: Record<string, unknown>[];
  mapi?: Record<string, unknown>[];
  pop3?: Record<string, unknown>[];
  smtp?: Record<string, unknown>[];
  nntp?: Record<string, unknown>[];
  ssh?: Record<string, unknown>[];
  dns?: Record<string, unknown>[];
  cifs?: Record<string, unknown>[];
  "mail-signature"?: Record<string, unknown>[];
  "rpc-over-http"?: 'enable' | 'disable';
}

export interface FirewallFirewallProxyAddress {
  name?: string;
  uuid?: string;
  type?: 'host-regex' | 'url' | 'category' | 'method' | 'ua' | 'header' | 'src-advanced' | 'dst-advanced' | 'saas';
  host?: string;
  "host-regex"?: string;
  path?: string;
  query?: string;
  referrer?: 'enable' | 'disable';
  category?: Record<string, unknown>[];
  method?: 'get' | 'post' | 'put' | 'head' | 'connect' | 'trace' | 'options' | 'delete';
  ua?: 'chrome' | 'ms' | 'firefox' | 'safari' | 'ie' | 'edge' | 'other';
  "ua-min-ver"?: string;
  "ua-max-ver"?: string;
  "header-name"?: string;
  header?: string;
  "case-sensitivity"?: 'disable' | 'enable';
  "header-group"?: Record<string, unknown>[];
  color?: number;
  tagging?: Record<string, unknown>[];
  comment?: string;
  application?: Record<string, unknown>[];
}

export interface FirewallFirewallProxyAddrgrp {
  name?: string;
  type?: 'src' | 'dst';
  uuid?: string;
  member?: Record<string, unknown>[];
  color?: number;
  tagging?: Record<string, unknown>[];
  comment?: string;
}

export interface FirewallFirewallProxyPolicy {
  uuid?: string;
  policyid?: number;
  name?: string;
  proxy?: 'explicit-web' | 'transparent-web' | 'ftp' | 'ssh' | 'ssh-tunnel' | 'access-proxy';
  "access-proxy"?: Record<string, unknown>[];
  "access-proxy6"?: Record<string, unknown>[];
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  poolname?: Record<string, unknown>[];
  poolname6?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  "ztna-ems-tag"?: Record<string, unknown>[];
  "ztna-tags-match-logic"?: 'or' | 'and';
  "device-ownership"?: 'enable' | 'disable';
  "internet-service"?: 'enable' | 'disable';
  "internet-service-negate"?: 'enable' | 'disable';
  "internet-service-name"?: Record<string, unknown>[];
  "internet-service-group"?: Record<string, unknown>[];
  "internet-service-custom"?: Record<string, unknown>[];
  "internet-service-custom-group"?: Record<string, unknown>[];
  "internet-service6"?: 'enable' | 'disable';
  "internet-service6-negate"?: 'enable' | 'disable';
  "internet-service6-name"?: Record<string, unknown>[];
  "internet-service6-group"?: Record<string, unknown>[];
  "internet-service6-custom"?: Record<string, unknown>[];
  "internet-service6-custom-group"?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  "dstaddr-negate"?: 'enable' | 'disable';
  "service-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny' | 'redirect';
  status?: 'enable' | 'disable';
  schedule?: string;
  logtraffic?: 'all' | 'utm' | 'disable';
  "session-ttl"?: number;
  srcaddr6?: Record<string, unknown>[];
  dstaddr6?: Record<string, unknown>[];
  groups?: Record<string, unknown>[];
  users?: Record<string, unknown>[];
  "http-tunnel-auth"?: 'enable' | 'disable';
  "ssh-policy-redirect"?: 'enable' | 'disable';
  "webproxy-forward-server"?: string;
  "webproxy-profile"?: string;
  transparent?: 'enable' | 'disable';
  disclaimer?: 'disable' | 'domain' | 'policy' | 'user';
  "utm-status"?: 'enable' | 'disable';
  "profile-type"?: 'single' | 'group';
  "profile-group"?: string;
  "profile-protocol-options"?: string;
  "ssl-ssh-profile"?: string;
  "av-profile"?: string;
  "webfilter-profile"?: string;
  "emailfilter-profile"?: string;
  "dlp-profile"?: string;
  "file-filter-profile"?: string;
  "ips-sensor"?: string;
  "application-list"?: string;
  "ips-voip-filter"?: string;
  "sctp-filter-profile"?: string;
  "icap-profile"?: string;
  "cifs-profile"?: string;
  "videofilter-profile"?: string;
  "waf-profile"?: string;
  "ssh-filter-profile"?: string;
  "casb-profile"?: string;
  "replacemsg-override-group"?: string;
  "logtraffic-start"?: 'enable' | 'disable';
  comments?: string;
  "block-notification"?: 'enable' | 'disable';
  "redirect-url"?: string;
  "decrypted-traffic-mirror"?: string;
  "detect-https-in-http-request"?: 'enable' | 'disable';
}

export interface FirewallFirewallRegion {
  id?: number;
  name?: string;
  city?: Record<string, unknown>[];
}

export interface FirewallFirewallSecurityPolicy {
  uuid?: string;
  policyid?: number;
  name?: string;
  comments?: string;
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  srcaddr?: Record<string, unknown>[];
  "srcaddr-negate"?: 'enable' | 'disable';
  dstaddr?: Record<string, unknown>[];
  "dstaddr-negate"?: 'enable' | 'disable';
  srcaddr6?: Record<string, unknown>[];
  "srcaddr6-negate"?: 'enable' | 'disable';
  dstaddr6?: Record<string, unknown>[];
  "dstaddr6-negate"?: 'enable' | 'disable';
  "internet-service"?: 'enable' | 'disable';
  "internet-service-name"?: Record<string, unknown>[];
  "internet-service-negate"?: 'enable' | 'disable';
  "internet-service-group"?: Record<string, unknown>[];
  "internet-service-custom"?: Record<string, unknown>[];
  "internet-service-custom-group"?: Record<string, unknown>[];
  "internet-service-src"?: 'enable' | 'disable';
  "internet-service-src-name"?: Record<string, unknown>[];
  "internet-service-src-negate"?: 'enable' | 'disable';
  "internet-service-src-group"?: Record<string, unknown>[];
  "internet-service-src-custom"?: Record<string, unknown>[];
  "internet-service-src-custom-group"?: Record<string, unknown>[];
  "internet-service6"?: 'enable' | 'disable';
  "internet-service6-name"?: Record<string, unknown>[];
  "internet-service6-negate"?: 'enable' | 'disable';
  "internet-service6-group"?: Record<string, unknown>[];
  "internet-service6-custom"?: Record<string, unknown>[];
  "internet-service6-custom-group"?: Record<string, unknown>[];
  "internet-service6-src"?: 'enable' | 'disable';
  "internet-service6-src-name"?: Record<string, unknown>[];
  "internet-service6-src-negate"?: 'enable' | 'disable';
  "internet-service6-src-group"?: Record<string, unknown>[];
  "internet-service6-src-custom"?: Record<string, unknown>[];
  "internet-service6-src-custom-group"?: Record<string, unknown>[];
  "enforce-default-app-port"?: 'enable' | 'disable';
  service?: Record<string, unknown>[];
  "service-negate"?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  "send-deny-packet"?: 'disable' | 'enable';
  schedule?: string;
  status?: 'enable' | 'disable';
  logtraffic?: 'all' | 'utm' | 'disable';
  "learning-mode"?: 'enable' | 'disable';
  nat46?: 'enable' | 'disable';
  nat64?: 'enable' | 'disable';
  "profile-type"?: 'single' | 'group';
  "profile-group"?: string;
  "profile-protocol-options"?: string;
  "ssl-ssh-profile"?: string;
  "av-profile"?: string;
  "webfilter-profile"?: string;
  "dnsfilter-profile"?: string;
  "emailfilter-profile"?: string;
  "dlp-profile"?: string;
  "file-filter-profile"?: string;
  "ips-sensor"?: string;
  "application-list"?: string;
  "voip-profile"?: string;
  "ips-voip-filter"?: string;
  "sctp-filter-profile"?: string;
  "diameter-filter-profile"?: string;
  "virtual-patch-profile"?: string;
  "icap-profile"?: string;
  "cifs-profile"?: string;
  "videofilter-profile"?: string;
  "ssh-filter-profile"?: string;
  "casb-profile"?: string;
  application?: Record<string, unknown>[];
  "app-category"?: Record<string, unknown>[];
  "url-category"?: string;
  "app-group"?: Record<string, unknown>[];
  groups?: Record<string, unknown>[];
  users?: Record<string, unknown>[];
  "fsso-groups"?: Record<string, unknown>[];
}

export interface FirewallFirewallShapingPolicy {
  id?: number;
  uuid?: string;
  name?: string;
  comment?: string;
  status?: 'enable' | 'disable';
  "ip-version"?: '4' | '6';
  "traffic-type"?: 'forwarding' | 'local-in' | 'local-out';
  srcaddr?: Record<string, unknown>[];
  dstaddr?: Record<string, unknown>[];
  srcaddr6?: Record<string, unknown>[];
  dstaddr6?: Record<string, unknown>[];
  "internet-service"?: 'enable' | 'disable';
  "internet-service-name"?: Record<string, unknown>[];
  "internet-service-group"?: Record<string, unknown>[];
  "internet-service-custom"?: Record<string, unknown>[];
  "internet-service-custom-group"?: Record<string, unknown>[];
  "internet-service-src"?: 'enable' | 'disable';
  "internet-service-src-name"?: Record<string, unknown>[];
  "internet-service-src-group"?: Record<string, unknown>[];
  "internet-service-src-custom"?: Record<string, unknown>[];
  "internet-service-src-custom-group"?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  schedule?: string;
  users?: Record<string, unknown>[];
  groups?: Record<string, unknown>[];
  application?: Record<string, unknown>[];
  "app-category"?: Record<string, unknown>[];
  "app-group"?: Record<string, unknown>[];
  "url-category"?: Record<string, unknown>[];
  srcintf?: Record<string, unknown>[];
  dstintf?: Record<string, unknown>[];
  "tos-mask"?: string;
  tos?: string;
  "tos-negate"?: 'enable' | 'disable';
  "traffic-shaper"?: string;
  "traffic-shaper-reverse"?: string;
  "per-ip-shaper"?: string;
  "class-id"?: number;
  "diffserv-forward"?: 'enable' | 'disable';
  "diffserv-reverse"?: 'enable' | 'disable';
  "diffservcode-forward"?: string;
  "diffservcode-rev"?: string;
  "cos-mask"?: string;
  cos?: string;
}

export interface FirewallFirewallShapingProfile {
  "profile-name"?: string;
  comment?: string;
  type?: 'policing' | 'queuing';
  "npu-offloading"?: 'disable' | 'enable';
  "default-class-id"?: number;
  "shaping-entries"?: Record<string, unknown>[];
}

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

export interface FirewallFirewallSslServer {
  name?: string;
  ip?: string;
  port?: number;
  "ssl-mode"?: 'half' | 'full';
  "add-header-x-forwarded-proto"?: 'enable' | 'disable';
  "mapped-port"?: number;
  "ssl-cert"?: Record<string, unknown>[];
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048';
  "ssl-algorithm"?: 'high' | 'medium' | 'low';
  "ssl-client-renegotiation"?: 'allow' | 'deny' | 'secure';
  "ssl-min-version"?: 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-max-version"?: 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "url-rewrite"?: 'enable' | 'disable';
}

export interface FirewallFirewallSslSshProfile {
  name?: string;
  comment?: string;
  ssl?: Record<string, unknown>[];
  https?: Record<string, unknown>[];
  ftps?: Record<string, unknown>[];
  imaps?: Record<string, unknown>[];
  pop3s?: Record<string, unknown>[];
  smtps?: Record<string, unknown>[];
  ssh?: Record<string, unknown>[];
  dot?: Record<string, unknown>[];
  allowlist?: 'enable' | 'disable';
  "block-blocklisted-certificates"?: 'disable' | 'enable';
  "ssl-exempt"?: Record<string, unknown>[];
  "ech-outer-sni"?: Record<string, unknown>[];
  "server-cert-mode"?: 're-sign' | 'replace';
  "use-ssl-server"?: 'disable' | 'enable';
  caname?: string;
  "untrusted-caname"?: string;
  "server-cert"?: Record<string, unknown>[];
  "ssl-server"?: Record<string, unknown>[];
  "ssl-exemption-ip-rating"?: 'enable' | 'disable';
  "ssl-exemption-log"?: 'disable' | 'enable';
  "ssl-anomaly-log"?: 'disable' | 'enable';
  "ssl-negotiation-log"?: 'disable' | 'enable';
  "ssl-server-cert-log"?: 'disable' | 'enable';
  "ssl-handshake-log"?: 'disable' | 'enable';
  "rpc-over-https"?: 'enable' | 'disable';
  "mapi-over-https"?: 'enable' | 'disable';
  "supported-alpn"?: 'http1-1' | 'http2' | 'all' | 'none';
}

export interface FirewallFirewallTrafficClass {
  "class-id"?: number;
  "class-name"?: string;
}

export interface FirewallFirewallTtlPolicy {
  id?: number;
  status?: 'enable' | 'disable';
  action?: 'accept' | 'deny';
  srcintf?: string;
  srcaddr?: Record<string, unknown>[];
  service?: Record<string, unknown>[];
  schedule?: string;
  ttl?: string;
}

export interface FirewallFirewallVendorMac {
  id?: number;
  name?: string;
  "mac-number"?: number;
  obsolete?: number;
}

export interface FirewallFirewallVendorMacSummary {}

export interface FirewallFirewallVip {
  name?: string;
  id?: number;
  uuid?: string;
  comment?: string;
  type?: 'static-nat' | 'load-balance' | 'server-load-balance' | 'dns-translation' | 'fqdn' | 'access-proxy';
  "server-type"?: 'http' | 'https' | 'imaps' | 'pop3s' | 'smtps' | 'ssl' | 'tcp' | 'udp' | 'ip';
  "dns-mapping-ttl"?: number;
  "ldb-method"?: 'static' | 'round-robin' | 'weighted' | 'least-session' | 'least-rtt' | 'first-alive' | 'http-host';
  "src-filter"?: Record<string, unknown>[];
  "src-vip-filter"?: 'disable' | 'enable';
  service?: Record<string, unknown>[];
  extip?: string;
  extaddr?: Record<string, unknown>[];
  "h2-support"?: 'enable' | 'disable';
  "h3-support"?: 'enable' | 'disable';
  quic?: Record<string, unknown>[];
  nat44?: 'disable' | 'enable';
  nat46?: 'disable' | 'enable';
  "add-nat46-route"?: 'disable' | 'enable';
  mappedip?: Record<string, unknown>[];
  "mapped-addr"?: string;
  extintf?: string;
  "arp-reply"?: 'disable' | 'enable';
  "http-redirect"?: 'enable' | 'disable';
  persistence?: 'none' | 'http-cookie' | 'ssl-session-id';
  "nat-source-vip"?: 'disable' | 'enable';
  portforward?: 'disable' | 'enable';
  status?: 'disable' | 'enable';
  protocol?: 'tcp' | 'udp' | 'sctp' | 'icmp';
  extport?: string;
  mappedport?: string;
  "gratuitous-arp-interval"?: number;
  "srcintf-filter"?: Record<string, unknown>[];
  "portmapping-type"?: '1-to-1' | 'm-to-n';
  realservers?: Record<string, unknown>[];
  "http-cookie-domain-from-host"?: 'disable' | 'enable';
  "http-cookie-domain"?: string;
  "http-cookie-path"?: string;
  "http-cookie-generation"?: number;
  "http-cookie-age"?: number;
  "http-cookie-share"?: 'disable' | 'same-ip';
  "https-cookie-secure"?: 'disable' | 'enable';
  "http-multiplex"?: 'enable' | 'disable';
  "http-multiplex-ttl"?: number;
  "http-multiplex-max-request"?: number;
  "http-multiplex-max-concurrent-request"?: number;
  "http-ip-header"?: 'enable' | 'disable';
  "http-ip-header-name"?: string;
  "outlook-web-access"?: 'disable' | 'enable';
  "weblogic-server"?: 'disable' | 'enable';
  "websphere-server"?: 'disable' | 'enable';
  "ssl-mode"?: 'half' | 'full';
  "ssl-certificate"?: Record<string, unknown>[];
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048' | '3072' | '4096';
  "ssl-algorithm"?: 'high' | 'medium' | 'low' | 'custom';
  "ssl-cipher-suites"?: Record<string, unknown>[];
  "ssl-server-algorithm"?: 'high' | 'medium' | 'low' | 'custom' | 'client';
  "ssl-server-cipher-suites"?: Record<string, unknown>[];
  "ssl-pfs"?: 'require' | 'deny' | 'allow';
  "ssl-min-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-max-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-server-min-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3' | 'client';
  "ssl-server-max-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3' | 'client';
  "ssl-accept-ffdhe-groups"?: 'enable' | 'disable';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "ssl-client-fallback"?: 'disable' | 'enable';
  "ssl-client-renegotiation"?: 'allow' | 'deny' | 'secure';
  "ssl-client-session-state-type"?: 'disable' | 'time' | 'count' | 'both';
  "ssl-client-session-state-timeout"?: number;
  "ssl-client-session-state-max"?: number;
  "ssl-client-rekey-count"?: number;
  "ssl-server-renegotiation"?: 'enable' | 'disable';
  "ssl-server-session-state-type"?: 'disable' | 'time' | 'count' | 'both';
  "ssl-server-session-state-timeout"?: number;
  "ssl-server-session-state-max"?: number;
  "ssl-http-location-conversion"?: 'enable' | 'disable';
  "ssl-http-match-host"?: 'enable' | 'disable';
  "ssl-hpkp"?: 'disable' | 'enable' | 'report-only';
  "ssl-hpkp-primary"?: string;
  "ssl-hpkp-backup"?: string;
  "ssl-hpkp-age"?: number;
  "ssl-hpkp-report-uri"?: string;
  "ssl-hpkp-include-subdomains"?: 'disable' | 'enable';
  "ssl-hsts"?: 'disable' | 'enable';
  "ssl-hsts-age"?: number;
  "ssl-hsts-include-subdomains"?: 'disable' | 'enable';
  monitor?: Record<string, unknown>[];
  "max-embryonic-connections"?: number;
  color?: number;
  "ipv6-mappedip"?: string;
  "ipv6-mappedport"?: string;
  "one-click-gslb-server"?: 'disable' | 'enable';
  "gslb-hostname"?: string;
  "gslb-domain-name"?: string;
  "gslb-public-ips"?: Record<string, unknown>[];
}

export interface FirewallFirewallVip6 {
  name?: string;
  id?: number;
  uuid?: string;
  comment?: string;
  type?: 'static-nat' | 'server-load-balance' | 'access-proxy';
  "src-filter"?: Record<string, unknown>[];
  "src-vip-filter"?: 'disable' | 'enable';
  extip?: string;
  mappedip?: string;
  "nat-source-vip"?: 'disable' | 'enable';
  "ndp-reply"?: 'disable' | 'enable';
  portforward?: 'disable' | 'enable';
  protocol?: 'tcp' | 'udp' | 'sctp';
  extport?: string;
  mappedport?: string;
  color?: number;
  "ldb-method"?: 'static' | 'round-robin' | 'weighted' | 'least-session' | 'least-rtt' | 'first-alive' | 'http-host';
  "server-type"?: 'http' | 'https' | 'imaps' | 'pop3s' | 'smtps' | 'ssl' | 'tcp' | 'udp' | 'ip';
  "http-redirect"?: 'enable' | 'disable';
  persistence?: 'none' | 'http-cookie' | 'ssl-session-id';
  "h2-support"?: 'enable' | 'disable';
  "h3-support"?: 'enable' | 'disable';
  quic?: Record<string, unknown>[];
  nat66?: 'disable' | 'enable';
  nat64?: 'disable' | 'enable';
  "add-nat64-route"?: 'disable' | 'enable';
  realservers?: Record<string, unknown>[];
  "http-cookie-domain-from-host"?: 'disable' | 'enable';
  "http-cookie-domain"?: string;
  "http-cookie-path"?: string;
  "http-cookie-generation"?: number;
  "http-cookie-age"?: number;
  "http-cookie-share"?: 'disable' | 'same-ip';
  "https-cookie-secure"?: 'disable' | 'enable';
  "http-multiplex"?: 'enable' | 'disable';
  "http-ip-header"?: 'enable' | 'disable';
  "http-ip-header-name"?: string;
  "outlook-web-access"?: 'disable' | 'enable';
  "weblogic-server"?: 'disable' | 'enable';
  "websphere-server"?: 'disable' | 'enable';
  "ssl-mode"?: 'half' | 'full';
  "ssl-certificate"?: Record<string, unknown>[];
  "ssl-dh-bits"?: '768' | '1024' | '1536' | '2048' | '3072' | '4096';
  "ssl-algorithm"?: 'high' | 'medium' | 'low' | 'custom';
  "ssl-cipher-suites"?: Record<string, unknown>[];
  "ssl-server-renegotiation"?: 'enable' | 'disable';
  "ssl-server-algorithm"?: 'high' | 'medium' | 'low' | 'custom' | 'client';
  "ssl-server-cipher-suites"?: Record<string, unknown>[];
  "ssl-pfs"?: 'require' | 'deny' | 'allow';
  "ssl-min-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-max-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3';
  "ssl-server-min-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3' | 'client';
  "ssl-server-max-version"?: 'ssl-3.0' | 'tls-1.0' | 'tls-1.1' | 'tls-1.2' | 'tls-1.3' | 'client';
  "ssl-accept-ffdhe-groups"?: 'enable' | 'disable';
  "ssl-send-empty-frags"?: 'enable' | 'disable';
  "ssl-client-fallback"?: 'disable' | 'enable';
  "ssl-client-renegotiation"?: 'allow' | 'deny' | 'secure';
  "ssl-client-session-state-type"?: 'disable' | 'time' | 'count' | 'both';
  "ssl-client-session-state-timeout"?: number;
  "ssl-client-session-state-max"?: number;
  "ssl-client-rekey-count"?: number;
  "ssl-server-session-state-type"?: 'disable' | 'time' | 'count' | 'both';
  "ssl-server-session-state-timeout"?: number;
  "ssl-server-session-state-max"?: number;
  "ssl-http-location-conversion"?: 'enable' | 'disable';
  "ssl-http-match-host"?: 'enable' | 'disable';
  "ssl-hpkp"?: 'disable' | 'enable' | 'report-only';
  "ssl-hpkp-primary"?: string;
  "ssl-hpkp-backup"?: string;
  "ssl-hpkp-age"?: number;
  "ssl-hpkp-report-uri"?: string;
  "ssl-hpkp-include-subdomains"?: 'disable' | 'enable';
  "ssl-hsts"?: 'disable' | 'enable';
  "ssl-hsts-age"?: number;
  "ssl-hsts-include-subdomains"?: 'disable' | 'enable';
  monitor?: Record<string, unknown>[];
  "max-embryonic-connections"?: number;
  "embedded-ipv4-address"?: 'disable' | 'enable';
  "ipv4-mappedip"?: string;
  "ipv4-mappedport"?: string;
}

export interface FirewallFirewallVipgrp {
  name?: string;
  uuid?: string;
  "interface"?: string;
  color?: number;
  comments?: string;
  member?: Record<string, unknown>[];
}

export interface FirewallFirewallVipgrp6 {
  name?: string;
  uuid?: string;
  color?: number;
  comments?: string;
  member?: Record<string, unknown>[];
}

