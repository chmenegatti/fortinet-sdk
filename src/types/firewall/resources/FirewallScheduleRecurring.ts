// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallScheduleRecurring {
  name?: string;
  start?: string;
  end?: string;
  day?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "none";
  color?: number;
  fabricObject?: "enable" | "disable";
}
