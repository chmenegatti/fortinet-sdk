// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallInternetService {
  id?: number;
  name?: string;
  iconId?: number;
  direction?: "src" | "dst" | "both";
  database?: "isdb" | "irdb";
  ipRangeNumber?: number;
  extraIpRangeNumber?: number;
  ipNumber?: number;
  ip6RangeNumber?: number;
  extraIp6RangeNumber?: number;
  singularity?: number;
  obsolete?: number;
}
