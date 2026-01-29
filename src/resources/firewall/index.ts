import type { FortiGateClient } from "../../client";
import { FirewallPolicyResource } from "./firewallPolicy";
import { FirewallAddressResource } from "./firewallAddress";
import { GenericFirewallResource } from "./genericFirewallResource";
import { FIREWALL_RESOURCE_MAP, FirewallResourceName } from "./resourceMap";
import type { BaseResource } from "../baseResource";

export type FirewallResourceRegistry = Record<FirewallResourceName, BaseResource>;

export class FirewallResources {
  readonly [key: string]: BaseResource | unknown;
  public readonly policy: FirewallPolicyResource;
  public readonly address: FirewallAddressResource;
  public readonly registry: FirewallResourceRegistry;

  constructor(client: FortiGateClient) {
    this.policy = new FirewallPolicyResource(client);
    this.address = new FirewallAddressResource(client);

    const registry = {} as FirewallResourceRegistry;
    for (const resource of FIREWALL_RESOURCE_MAP) {
      registry[resource.name] = new GenericFirewallResource(
        client,
        `/api/v2/cmdb${resource.path}`
      );
    }

    this.registry = registry;
    Object.assign(this, registry);
  }

  public resource(name: FirewallResourceName): BaseResource {
    return this.registry[name];
  }
}

export { FirewallPolicyResource } from "./firewallPolicy";
export { FirewallAddressResource } from "./firewallAddress";
export { GenericFirewallResource } from "./genericFirewallResource";
export * from "./generatedResources";
export { FIREWALL_RESOURCE_MAP } from "./resourceMap";
export type { FirewallResourceDefinition, FirewallResourceName } from "./resourceMap";
