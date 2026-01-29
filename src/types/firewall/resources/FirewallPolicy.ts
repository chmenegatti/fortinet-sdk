// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallPolicy {
  policyid?: number;
  status?: "enable" | "disable";
  name?: string;
  uuid?: string;
  srcintf?: Array<{
      name?: string;
    }>;
  dstintf?: Array<{
      name?: string;
    }>;
  action?: "accept" | "deny" | "ipsec";
  nat64?: "enable" | "disable";
  nat46?: "enable" | "disable";
  ztnaStatus?: "enable" | "disable";
  ztnaDeviceOwnership?: "enable" | "disable";
  srcaddr?: Array<{
      name?: string;
    }>;
  dstaddr?: Array<{
      name?: string;
    }>;
  srcaddr6?: Array<{
      name?: string;
    }>;
  dstaddr6?: Array<{
      name?: string;
    }>;
  ztnaEmsTag?: Array<{
      name?: string;
    }>;
  ztnaEmsTagSecondary?: Array<{
      name?: string;
    }>;
  ztnaTagsMatchLogic?: "or" | "and";
  ztnaGeoTag?: Array<{
      name?: string;
    }>;
  internetService?: "enable" | "disable";
  internetServiceName?: Array<{
      name?: string;
    }>;
  internetServiceGroup?: Array<{
      name?: string;
    }>;
  internetServiceCustom?: Array<{
      name?: string;
    }>;
  networkServiceDynamic?: Array<{
      name?: string;
    }>;
  internetServiceCustomGroup?: Array<{
      name?: string;
    }>;
  internetServiceSrc?: "enable" | "disable";
  internetServiceSrcName?: Array<{
      name?: string;
    }>;
  internetServiceSrcGroup?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustom?: Array<{
      name?: string;
    }>;
  networkServiceSrcDynamic?: Array<{
      name?: string;
    }>;
  internetServiceSrcCustomGroup?: Array<{
      name?: string;
    }>;
  reputationMinimum?: number;
  reputationDirection?: "source" | "destination";
  srcVendorMac?: Array<{
      id?: number;
    }>;
  internetService6?: "enable" | "disable";
  internetService6Name?: Array<{
      name?: string;
    }>;
  internetService6Group?: Array<{
      name?: string;
    }>;
  internetService6Custom?: Array<{
      name?: string;
    }>;
  internetService6CustomGroup?: Array<{
      name?: string;
    }>;
  internetService6Src?: "enable" | "disable";
  internetService6SrcName?: Array<{
      name?: string;
    }>;
  internetService6SrcGroup?: Array<{
      name?: string;
    }>;
  internetService6SrcCustom?: Array<{
      name?: string;
    }>;
  internetService6SrcCustomGroup?: Array<{
      name?: string;
    }>;
  reputationMinimum6?: number;
  reputationDirection6?: "source" | "destination";
  rtpNat?: "disable" | "enable";
  rtpAddr?: Array<{
      name?: string;
    }>;
  sendDenyPacket?: "disable" | "enable";
  firewallSessionDirty?: "check-all" | "check-new";
  schedule?: string;
  scheduleTimeout?: "enable" | "disable";
  policyExpiry?: "enable" | "disable";
  policyExpiryDate?: string;
  policyExpiryDateUtc?: string;
  service?: Array<{
      name?: string;
    }>;
  tosMask?: string;
  tos?: string;
  tosNegate?: "enable" | "disable";
  antiReplay?: "enable" | "disable";
  tcpSessionWithoutSyn?: "all" | "data-only" | "disable";
  geoipAnycast?: "enable" | "disable";
  geoipMatch?: "physical-location" | "registered-location";
  dynamicShaping?: "enable" | "disable";
  passiveWanHealthMeasurement?: "enable" | "disable";
  utmStatus?: "enable" | "disable";
  inspectionMode?: "proxy" | "flow";
  httpPolicyRedirect?: "enable" | "disable";
  sshPolicyRedirect?: "enable" | "disable";
  ztnaPolicyRedirect?: "enable" | "disable";
  webproxyProfile?: string;
  profileType?: "single" | "group";
  profileGroup?: string;
  profileProtocolOptions?: string;
  sslSshProfile?: string;
  avProfile?: string;
  webfilterProfile?: string;
  dnsfilterProfile?: string;
  emailfilterProfile?: string;
  dlpProfile?: string;
  fileFilterProfile?: string;
  ipsSensor?: string;
  applicationList?: string;
  voipProfile?: string;
  ipsVoipFilter?: string;
  sctpFilterProfile?: string;
  diameterFilterProfile?: string;
  virtualPatchProfile?: string;
  icapProfile?: string;
  cifsProfile?: string;
  videofilterProfile?: string;
  wafProfile?: string;
  sshFilterProfile?: string;
  casbProfile?: string;
  logtraffic?: "all" | "utm" | "disable";
  logtrafficStart?: "enable" | "disable";
  capturePacket?: "enable" | "disable";
  autoAsicOffload?: "enable" | "disable";
  npAcceleration?: "enable" | "disable";
  webproxyForwardServer?: string;
  trafficShaper?: string;
  trafficShaperReverse?: string;
  perIpShaper?: string;
  nat?: "enable" | "disable";
  pcpOutbound?: "enable" | "disable";
  pcpInbound?: "enable" | "disable";
  pcpPoolname?: Array<{
      name?: string;
    }>;
  permitAnyHost?: "enable" | "disable";
  permitStunHost?: "enable" | "disable";
  fixedport?: "enable" | "disable";
  portPreserve?: "enable" | "disable";
  ippool?: "enable" | "disable";
  poolname?: Array<{
      name?: string;
    }>;
  poolname6?: Array<{
      name?: string;
    }>;
  sessionTtl?: string;
  vlanCosFwd?: number;
  vlanCosRev?: number;
  inbound?: "enable" | "disable";
  outbound?: "enable" | "disable";
  natinbound?: "enable" | "disable";
  natoutbound?: "enable" | "disable";
  fec?: "enable" | "disable";
  wccp?: "enable" | "disable";
  ntlm?: "enable" | "disable";
  ntlmGuest?: "enable" | "disable";
  ntlmEnabledBrowsers?: Array<{
      userAgentString?: string;
    }>;
  fssoAgentForNtlm?: string;
  groups?: Array<{
      name?: string;
    }>;
  users?: Array<{
      name?: string;
    }>;
  fssoGroups?: Array<{
      name?: string;
    }>;
  authPath?: "enable" | "disable";
  disclaimer?: "enable" | "disable";
  emailCollect?: "enable" | "disable";
  vpntunnel?: string;
  natip?: string;
  matchVip?: "enable" | "disable";
  matchVipOnly?: "enable" | "disable";
  diffservCopy?: "enable" | "disable";
  diffservForward?: "enable" | "disable";
  diffservReverse?: "enable" | "disable";
  diffservcodeForward?: string;
  diffservcodeRev?: string;
  tcpMssSender?: number;
  tcpMssReceiver?: number;
  comments?: string;
  authCert?: string;
  authRedirectAddr?: string;
  redirectUrl?: string;
  identityBasedRoute?: string;
  blockNotification?: "enable" | "disable";
  customLogFields?: Array<{
      fieldId?: string;
    }>;
  replacemsgOverrideGroup?: string;
  srcaddrNegate?: "enable" | "disable";
  srcaddr6Negate?: "enable" | "disable";
  dstaddrNegate?: "enable" | "disable";
  dstaddr6Negate?: "enable" | "disable";
  serviceNegate?: "enable" | "disable";
  internetServiceNegate?: "enable" | "disable";
  internetServiceSrcNegate?: "enable" | "disable";
  internetService6Negate?: "enable" | "disable";
  internetService6SrcNegate?: "enable" | "disable";
  timeoutSendRst?: "enable" | "disable";
  captivePortalExempt?: "enable" | "disable";
  decryptedTrafficMirror?: string;
  dsri?: "enable" | "disable";
  radiusMacAuthBypass?: "enable" | "disable";
  delayTcpNpuSession?: "enable" | "disable";
  vlanFilter?: string;
  sgtCheck?: "enable" | "disable";
  sgt?: Array<{
      id?: number;
    }>;
}
