import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ItemApiClient {
  private readonly httpClient: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.httpClient = axios.create(config);
  }

  public save(payload: Record<string, unknown>) {
    return this.httpClient.post("/v1/items", payload);
  }
}

export default ItemApiClient;
