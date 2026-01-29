// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAddress6Template {
  name?: string;
  ip6?: string;
  subnetSegmentCount?: number;
  subnetSegment?: Array<{
      id?: number;
      name?: string;
      bits?: number;
      exclusive?: "enable" | "disable";
      values?: Array<{
          name?: string;
          value?: string;
        }>;
    }>;
  fabricObject?: "enable" | "disable";
}
