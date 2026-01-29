// Auto-generated from FortiOS 7.4.10 Configuration API

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
