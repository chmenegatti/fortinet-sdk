// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSshHostKey {
  name?: string;
  status?: "trusted" | "revoked";
  type?: "RSA" | "DSA" | "ECDSA" | "ED25519" | "RSA-CA" | "DSA-CA" | "ECDSA-CA" | "ED25519-CA";
  nid?: "256" | "384" | "521";
  usage?: "transparent-proxy" | "access-proxy";
  ip?: string;
  port?: number;
  hostname?: string;
  publicKey?: string;
}
