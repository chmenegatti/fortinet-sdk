// Auto-generated from FortiOS 7.4.10 Configuration API

export interface FirewallFirewallShapingProfile {
  "profile-name"?: string;
  comment?: string;
  type?: 'policing' | 'queuing';
  "npu-offloading"?: 'disable' | 'enable';
  "default-class-id"?: number;
  "shaping-entries"?: Record<string, unknown>[];
}
