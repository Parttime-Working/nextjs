import { AxiosRequestConfig } from "axios";
import BaseClient from "../BaseClient";
import FormService from "./services/FormService";

export default class ApiGatewayClient extends BaseClient {
  public readonly form: FormService;

  constructor(config: AxiosRequestConfig) {
    super(config);

    this.form = new FormService(this.httpClient);
  }
}
