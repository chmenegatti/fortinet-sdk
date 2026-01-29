// Auto-generated from FortiOS 7.4.10 Configuration API

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
