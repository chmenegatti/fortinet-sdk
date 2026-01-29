// Auto-generated from FortiOS 7.4.10 Configuration API

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
