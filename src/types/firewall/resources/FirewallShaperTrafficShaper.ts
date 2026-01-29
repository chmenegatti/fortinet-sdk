// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallShaperTrafficShaper {
  name?: string;
  guaranteedBandwidth?: number;
  maximumBandwidth?: number;
  bandwidthUnit?: "kbps" | "mbps" | "gbps";
  priority?: "low" | "medium" | "high";
  perPolicy?: "disable" | "enable";
  diffserv?: "enable" | "disable";
  diffservcode?: string;
  dscpMarkingMethod?: "multi-stage" | "static";
  exceedBandwidth?: number;
  exceedDscp?: string;
  maximumDscp?: string;
  cosMarking?: "enable" | "disable";
  cosMarkingMethod?: "multi-stage" | "static";
  cos?: string;
  exceedCos?: string;
  maximumCos?: string;
  overhead?: number;
  exceedClassId?: number;
}
