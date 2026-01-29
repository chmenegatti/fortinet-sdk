// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallSslSetting {
  proxyConnectTimeout?: number;
  sslDhBits?: "768" | "1024" | "1536" | "2048";
  sslSendEmptyFrags?: "enable" | "disable";
  noMatchingCipherAction?: "bypass" | "drop";
  certCacheCapacity?: number;
  certCacheTimeout?: number;
  sessionCacheCapacity?: number;
  sessionCacheTimeout?: number;
  kxpQueueThreshold?: number;
  sslQueueThreshold?: number;
  abbreviateHandshake?: "enable" | "disable";
}
