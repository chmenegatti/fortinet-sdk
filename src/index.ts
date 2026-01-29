export { FortiGateClient } from "./client";
export type { FortiGateClientOptions, FortiGateAuthConfig } from "./client";

export * from "./resources/firewall";
export * from "./types";
export * from "./types/api";
export { fromApiCase, toApiCase } from "./utils/caseConversion";
export {
  SWAGGER_PRESERVE_KEYS,
  SWAGGER_REQUEST_KEY_MAP,
  SWAGGER_RESPONSE_KEY_MAP
} from "./utils/swaggerCaseMap";
