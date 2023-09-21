import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

abstract class BaseClient {
  protected readonly httpClient: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.httpClient = axios.create(config);
  }
}

export default BaseClient;
