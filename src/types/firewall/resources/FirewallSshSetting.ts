// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSshSetting {
  caname?: string;
  untrustedCaname?: string;
  hostkeyRsa2048?: string;
  hostkeyDsa1024?: string;
  hostkeyEcdsa256?: string;
  hostkeyEcdsa384?: string;
  hostkeyEcdsa521?: string;
  hostkeyEd25519?: string;
  hostTrustedChecking?: "enable" | "disable";
}
