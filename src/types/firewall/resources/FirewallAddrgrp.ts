// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAddrgrp {
  name?: string;
  type?: "default" | "folder";
  category?: "default" | "ztna-ems-tag" | "ztna-geo-tag";
  uuid?: string;
  allowRouting?: "enable" | "disable";
  member?: Array<{
      name?: string;
    }>;
  comment?: string;
  exclude?: "enable" | "disable";
  excludeMember?: Array<{
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
  fabricObject?: "enable" | "disable";
}
