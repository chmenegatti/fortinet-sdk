// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallProxyAddrgrp {
  name?: string;
  type?: "src" | "dst";
  uuid?: string;
  member?: Array<{
      name?: string;
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
}
