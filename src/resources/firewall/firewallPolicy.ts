import { BaseResource } from "../baseResource";
import type { FortiGateClient } from "../../client";

export class FirewallPolicyResource extends BaseResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/policy");
  }
}
