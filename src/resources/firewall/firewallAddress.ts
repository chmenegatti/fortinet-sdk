import { BaseResource } from "../baseResource";
import type { FortiGateClient } from "../../client";

export class FirewallAddressResource extends BaseResource {
  constructor(client: FortiGateClient) {
    super(client, "/api/v2/cmdb/firewall/address");
  }
}
