// Auto-generated from FortiOS 7.4.10 Configuration API

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
