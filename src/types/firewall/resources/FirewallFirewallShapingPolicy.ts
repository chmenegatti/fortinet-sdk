// Auto-generated from FortiOS 7.4.10 Configuration API

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
