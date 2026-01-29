export interface FortiGateResponseMeta {
  status?: "success" | "error" | string;
  httpStatus?: number;
  message?: string;
  vdom?: string;
  mkey?: string;
  path?: string;
  serial?: string;
  version?: string;
  build?: number | string;
  revision?: string;
  revisionChanged?: boolean;
}

export interface FortiGateApiResponse<T> {
  results?: T | T[];
  meta?: FortiGateResponseMeta;
  status?: FortiGateResponseMeta["status"];
  httpStatus?: number;
  vdom?: string;
  mkey?: string;
  path?: string;
}

export type FortiGateListResponse<T> = FortiGateApiResponse<T> & {
  results?: T[];
};

export type FortiGateObjectResponse<T> = FortiGateApiResponse<T> & {
  results?: T;
};
