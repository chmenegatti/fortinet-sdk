import type { FortiGateClient } from "../../client";
import { GenericFirewallResource } from "./genericFirewallResource";

export class FirewallIpmacbindingSettingResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ipmacbinding/setting");
  }
}

export class FirewallIpmacbindingTableResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ipmacbinding/table");
  }
}

export class FirewallScheduleGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.schedule/group");
  }
}

export class FirewallScheduleOnetimeResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.schedule/onetime");
  }
}

export class FirewallScheduleRecurringResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.schedule/recurring");
  }
}

export class FirewallServiceCategoryResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.service/category");
  }
}

export class FirewallServiceCustomResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.service/custom");
  }
}

export class FirewallServiceGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.service/group");
  }
}

export class FirewallShaperPerIpShaperResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.shaper/per-ip-shaper");
  }
}

export class FirewallShaperTrafficShaperResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.shaper/traffic-shaper");
  }
}

export class FirewallSshHostKeyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ssh/host-key");
  }
}

export class FirewallSshLocalCaResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ssh/local-ca");
  }
}

export class FirewallSshLocalKeyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ssh/local-key");
  }
}

export class FirewallSshSettingResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ssh/setting");
  }
}

export class FirewallSslSettingResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.ssl/setting");
  }
}

export class FirewallWildcardFqdnCustomResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.wildcard-fqdn/custom");
  }
}

export class FirewallWildcardFqdnGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall.wildcard-fqdn/group");
  }
}

export class FirewallDosPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/DoS-policy");
  }
}

export class FirewallDosPolicy6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/DoS-policy6");
  }
}

export class FirewallAccessProxyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/access-proxy");
  }
}

export class FirewallAccessProxySshClientCertResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/access-proxy-ssh-client-cert");
  }
}

export class FirewallAccessProxyVirtualHostResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/access-proxy-virtual-host");
  }
}

export class FirewallAccessProxy6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/access-proxy6");
  }
}

export class FirewallAddressResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/address");
  }
}

export class FirewallAddress6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/address6");
  }
}

export class FirewallAddress6TemplateResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/address6-template");
  }
}

export class FirewallAddrgrpResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/addrgrp");
  }
}

export class FirewallAddrgrp6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/addrgrp6");
  }
}

export class FirewallAuthPortalResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/auth-portal");
  }
}

export class FirewallCentralSnatMapResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/central-snat-map");
  }
}

export class FirewallCityResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/city");
  }
}

export class FirewallCountryResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/country");
  }
}

export class FirewallDecryptedTrafficMirrorResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/decrypted-traffic-mirror");
  }
}

export class FirewallDnstranslationResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/dnstranslation");
  }
}

export class FirewallGlobalResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/global");
  }
}

export class FirewallIdentityBasedRouteResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/identity-based-route");
  }
}

export class FirewallInterfacePolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/interface-policy");
  }
}

export class FirewallInterfacePolicy6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/interface-policy6");
  }
}

export class FirewallInternetServiceResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service");
  }
}

export class FirewallInternetServiceAdditionResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-addition");
  }
}

export class FirewallInternetServiceAppendResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-append");
  }
}

export class FirewallInternetServiceBotnetResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-botnet");
  }
}

export class FirewallInternetServiceCustomResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-custom");
  }
}

export class FirewallInternetServiceCustomGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-custom-group");
  }
}

export class FirewallInternetServiceDefinitionResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-definition");
  }
}

export class FirewallInternetServiceExtensionResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-extension");
  }
}

export class FirewallInternetServiceGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-group");
  }
}

export class FirewallInternetServiceIpblReasonResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-ipbl-reason");
  }
}

export class FirewallInternetServiceIpblVendorResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-ipbl-vendor");
  }
}

export class FirewallInternetServiceListResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-list");
  }
}

export class FirewallInternetServiceNameResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-name");
  }
}

export class FirewallInternetServiceOwnerResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-owner");
  }
}

export class FirewallInternetServiceReputationResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-reputation");
  }
}

export class FirewallInternetServiceSldResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-sld");
  }
}

export class FirewallInternetServiceSubappResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/internet-service-subapp");
  }
}

export class FirewallIpTranslationResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ip-translation");
  }
}

export class FirewallIppoolResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ippool");
  }
}

export class FirewallIppool6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ippool6");
  }
}

export class FirewallLdbMonitorResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ldb-monitor");
  }
}

export class FirewallLocalInPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/local-in-policy");
  }
}

export class FirewallLocalInPolicy6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/local-in-policy6");
  }
}

export class FirewallMulticastAddressResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/multicast-address");
  }
}

export class FirewallMulticastAddress6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/multicast-address6");
  }
}

export class FirewallMulticastPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/multicast-policy");
  }
}

export class FirewallMulticastPolicy6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/multicast-policy6");
  }
}

export class FirewallNetworkServiceDynamicResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/network-service-dynamic");
  }
}

export class FirewallOnDemandSnifferResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/on-demand-sniffer");
  }
}

export class FirewallPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/policy");
  }
}

export class FirewallProfileGroupResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/profile-group");
  }
}

export class FirewallProfileProtocolOptionsResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/profile-protocol-options");
  }
}

export class FirewallProxyAddressResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/proxy-address");
  }
}

export class FirewallProxyAddrgrpResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/proxy-addrgrp");
  }
}

export class FirewallProxyPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/proxy-policy");
  }
}

export class FirewallRegionResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/region");
  }
}

export class FirewallSecurityPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/security-policy");
  }
}

export class FirewallShapingPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/shaping-policy");
  }
}

export class FirewallShapingProfileResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/shaping-profile");
  }
}

export class FirewallSnifferResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/sniffer");
  }
}

export class FirewallSslServerResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ssl-server");
  }
}

export class FirewallSslSshProfileResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ssl-ssh-profile");
  }
}

export class FirewallTrafficClassResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/traffic-class");
  }
}

export class FirewallTtlPolicyResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/ttl-policy");
  }
}

export class FirewallVendorMacResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vendor-mac");
  }
}

export class FirewallVendorMacSummaryResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vendor-mac-summary");
  }
}

export class FirewallVipResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vip");
  }
}

export class FirewallVip6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vip6");
  }
}

export class FirewallVipgrpResource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vipgrp");
  }
}

export class FirewallVipgrp6Resource extends GenericFirewallResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/vipgrp6");
  }
}
