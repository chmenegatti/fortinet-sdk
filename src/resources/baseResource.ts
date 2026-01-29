import type { FortiGateClient } from "../client";

export class BaseResource {
  protected readonly client: FortiGateClient;
  protected readonly basePath: string;

  constructor(client: FortiGateClient, basePath: string) {
    this.client = client;
    this.basePath = basePath;
  }

  public getAll<T>(params?: Record<string, unknown>): Promise<T> {
    return this.client.request<T>({
      method: "GET",
      url: this.basePath,
      params
    });
  }

  public getById<T>(id: string | number, params?: Record<string, unknown>): Promise<T> {
    return this.client.request<T>({
      method: "GET",
      url: `${this.basePath}/${id}`,
      params
    });
  }

  public create<T, P>(payload: P): Promise<T> {
    return this.client.request<T>({
      method: "POST",
      url: this.basePath,
      data: payload
    });
  }

  public update<T, P>(id: string | number, payload: P): Promise<T> {
    return this.client.request<T>({
      method: "PUT",
      url: `${this.basePath}/${id}`,
      data: payload
    });
  }

  public delete<T>(id: string | number): Promise<T> {
    return this.client.request<T>({
      method: "DELETE",
      url: `${this.basePath}/${id}`
    });
  }
}
