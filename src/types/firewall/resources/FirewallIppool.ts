// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallIppool {
  name?: string;
  type?: "overload" | "one-to-one" | "fixed-port-range" | "port-block-allocation";
  startip?: string;
  endip?: string;
  startport?: number;
  endport?: number;
  sourceStartip?: string;
  sourceEndip?: string;
  blockSize?: number;
  portPerUser?: number;
  numBlocksPerUser?: number;
  pbaTimeout?: number;
  pbaInterimLog?: number;
  permitAnyHost?: "disable" | "enable";
  arpReply?: "disable" | "enable";
  arpIntf?: string;
  associatedInterface?: string;
  comments?: string;
  nat64?: "disable" | "enable";
  addNat64Route?: "disable" | "enable";
  subnetBroadcastInIppool?: "disable" | "enable";
}
