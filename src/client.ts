import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { FirewallResources } from "./resources/firewall";
import { fromApiCase, toApiCase } from "./utils/caseConversion";
import {
  SWAGGER_PRESERVE_KEYS,
  SWAGGER_REQUEST_KEY_MAP,
  SWAGGER_RESPONSE_KEY_MAP
} from "./utils/swaggerCaseMap";

export interface FortiGateAuthConfig {
  accessToken?: string;
  sessionCookie?: string;
  useAccessTokenInQuery?: boolean;
}

export interface FortiGateClientOptions {
  baseUrl: string;
  auth?: FortiGateAuthConfig;
  timeoutMs?: number;
  transformRequestKeys?: boolean;
  transformResponseKeys?: boolean;
  caseTransformPreserveKeys?: string[];
  requestKeyMap?: Record<string, string>;
  responseKeyMap?: Record<string, string>;
}

export class FortiGateClient {
  private readonly http: AxiosInstance;
  private readonly options: FortiGateClientOptions;
  public readonly firewall: FirewallResources;

  constructor(options: FortiGateClientOptions) {
    const requestKeyMap = {
      ...SWAGGER_REQUEST_KEY_MAP,
      ...options.requestKeyMap
    };
    const responseKeyMap = {
      ...SWAGGER_RESPONSE_KEY_MAP,
      ...options.responseKeyMap
    };
    const preserveKeys = Array.from(
      new Set([...(SWAGGER_PRESERVE_KEYS as readonly string[]), ...(options.caseTransformPreserveKeys ?? [])])
    );

    this.options = {
      transformRequestKeys: true,
      transformResponseKeys: true,
      caseTransformPreserveKeys: preserveKeys,
      requestKeyMap,
      responseKeyMap,
      ...options
    };

    this.http = axios.create({
      baseURL: this.options.baseUrl,
      timeout: this.options.timeoutMs ?? 30000,
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const auth = this.options.auth;
      if (!auth) {
        return config;
      }

      if (auth.sessionCookie) {
        config.headers.set('Cookie', auth.sessionCookie);
      }

      if (auth.accessToken) {
        if (auth.useAccessTokenInQuery ?? true) {
          config.params = {
            ...config.params,
            access_token: auth.accessToken
          };
        } else {
          config.headers.set('Authorization', `Bearer ${auth.accessToken}`);
        }
      }

      return config;
    });

    this.http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(this.normalizeError(error));
      }
    );

    this.firewall = new FirewallResources(this);
  }

  public async request<T>(config: AxiosRequestConfig): Promise<T> {
    const requestConfig: AxiosRequestConfig = {
      ...config
    };

    if (this.options.transformRequestKeys) {
      if (requestConfig.params) {
        requestConfig.params = toApiCase(requestConfig.params, {
          preserveKeys: this.options.caseTransformPreserveKeys,
          keyMap: this.options.requestKeyMap
        }) as Record<string, unknown>;
      }
      if (requestConfig.data) {
        requestConfig.data = toApiCase(requestConfig.data, {
          preserveKeys: this.options.caseTransformPreserveKeys,
          keyMap: this.options.requestKeyMap
        });
      }
    }

    const response = await this.http.request<T>(requestConfig);
    if (this.options.transformResponseKeys) {
      return fromApiCase(response.data, {
        preserveKeys: this.options.caseTransformPreserveKeys,
        keyMap: this.options.responseKeyMap
      }) as T;
    }

    return response.data;
  }

  private normalizeError(error: AxiosError): Error {
    if (error.response) {
      const status = error.response.status;
      const statusText = error.response.statusText;
      const message = `FortiGate API error: ${status} ${statusText}`;
      return new Error(message);
    }

    if (error.request) {
      return new Error("FortiGate API error: no response received");
    }

    return new Error(error.message || "FortiGate API error");
  }
}
