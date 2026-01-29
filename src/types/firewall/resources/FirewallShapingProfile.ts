// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallShapingProfile {
  profileName?: string;
  comment?: string;
  type?: "policing" | "queuing";
  npuOffloading?: "disable" | "enable";
  defaultClassId?: number;
  shapingEntries?: Array<{
      id?: number;
      classId?: number;
      priority?: "top" | "critical" | "high" | "medium" | "low";
      guaranteedBandwidthPercentage?: number;
      maximumBandwidthPercentage?: number;
      limit?: number;
      burstInMsec?: number;
      cburstInMsec?: number;
      redProbability?: number;
      min?: number;
      max?: number;
    }>;
}
