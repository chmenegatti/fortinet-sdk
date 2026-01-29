// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAddrgrp6 {
  name?: string;
  uuid?: string;
  color?: number;
  comment?: string;
  member?: Array<{
      name?: string;
    }>;
  exclude?: "enable" | "disable";
  excludeMember?: Array<{
      name?: string;
    }>;
  tagging?: Array<{
      name?: string;
      category?: string;
      tags?: Array<{
          name?: string;
        }>;
    }>;
  fabricObject?: "enable" | "disable";
}
