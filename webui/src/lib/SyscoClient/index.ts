import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import qs from "qs";
import { parseStringPromise } from "xml2js";

export default class SyscoClient {
  private readonly httpClient: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.httpClient = axios.create(config);
  }

  // TODO: validate input use zod
  async search(query: Record<string, unknown>) {
    try {
      const { data: xml, ...resp } = await this.httpClient.get("", {
        params: query,
        paramsSerializer: (params) => qs.stringify(params, { encode: false })
      });

      const data = await parseStringPromise(xml);
      console.log(data);

      // sometimes header is useful, return them
      return {
        ...resp,
        data,
      };
    } catch (e) {
      console.log(e, "error");
      // some error handling?
    }
  }
}

// usage example:
// const syspxClient = new SyspxClient({baseURL: process.env.API_URL})

// syspxClient.search([["$DB", "SLDEV"], ["$SP", "A_TEST"]]);
