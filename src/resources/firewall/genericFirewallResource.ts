import { BaseResource } from "../baseResource";
import type { FortiGateClient } from "../../client";

export class GenericFirewallResource extends BaseResource {
  constructor(client: FortiGateClient, path: string) {
    super(client, path);
  }
}
