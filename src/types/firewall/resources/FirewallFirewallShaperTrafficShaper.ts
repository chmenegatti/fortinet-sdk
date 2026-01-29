// Auto-generated from FortiOS 7.4.10 Configuration API

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
