// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallAccessProxyVirtualHost {
  name?: string;
  sslCertificate?: Array<{
      name?: string;
    }>;
  host?: string;
  hostType?: "sub-string" | "wildcard";
  replacemsgGroup?: string;
}
