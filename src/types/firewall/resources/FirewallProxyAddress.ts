// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallProxyAddress {
  name?: string;
  uuid?: string;
  type?: "host-regex" | "url" | "category" | "method" | "ua" | "header" | "src-advanced" | "dst-advanced" | "saas";
  host?: string;
  hostRegex?: string;
  path?: string;
  query?: string;
  referrer?: "enable" | "disable";
  category?: Array<{
      id?: number;
    }>;
  method?: "get" | "post" | "put" | "head" | "connect" | "trace" | "options" | "delete";
  ua?: "chrome" | "ms" | "firefox" | "safari" | "ie" | "edge" | "other";
  uaMinVer?: string;
  uaMaxVer?: string;
  headerName?: string;
  header?: string;
  caseSensitivity?: "disable" | "enable";
  headerGroup?: Array<{
      id?: number;
      headerName?: string;
      header?: string;
      caseSensitivity?: "disable" | "enable";
    }>;
  color?: number;
  tagging?: Array<{
      name?: string;
      category?: string;
      tags?: Array<{
          name?: string;
        }>;
    }>;
  comment?: string;
  application?: Array<{
      name?: string;
    }>;
}
