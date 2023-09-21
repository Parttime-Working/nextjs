import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import qs from "qs";
import { parseStringPromise } from "xml2js";
import BaseClient from "../BaseClient";


export default class SyscoClient extends BaseClient {
  // TODO: validate input use zod
  async search(query: Record<string, unknown>) {
    try {
      const { data, ...resp } = await this.httpClient.get("", {
        params: query,
        paramsSerializer: (params: Record<string, any>) => qs.stringify(params, { encode: false }),
        // timeout: 1000,
      });

      // resp from proxy is not xml string, don't need to parse
      if (typeof data === "string") {
        const parsedData = await parseStringPromise(data);

        // sometimes header is useful, return them
        return {
          ...resp,
          data: parsedData,
        };
      }

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
