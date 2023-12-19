import {
  FormSearchParams,
  FormSearchParamsSchema,
} from "@/app/api/v1/forms/lib/FormSearchParamsSchema";
import { AxiosInstance } from "axios";
import {
  FormSearchResponse,
  FormSearchResponseSchema,
} from "./responses/FormSearchResponseSchema";

const defaultResp: FormSearchResponse = {
  items: [],
  page: 1,
  pageSize: 25,
  total: 0,
  totalPages: 1,
};

export default class FormService {
  constructor(private readonly client: AxiosInstance) {}

  async search(
    payload: Partial<FormSearchParams> // partial make the required field `page` and `pageSize` of SearchParam optional
  ) {
    const parsedPayload = FormSearchParamsSchema.safeParse(payload);
    if (!parsedPayload.success) {
      // pop up alert?

      return defaultResp;
    }

    const { data } = await this.client.get("/api/v1/forms", {
      params: parsedPayload.data,
    });

    const parsedResp = FormSearchResponseSchema.safeParse(data);

    if (!parsedResp.success) {
      // send log to server to alert developers??? My company use bugsnag to trace these unexpected errors
      const errorMessage = parsedResp.error; // 调用 error 函数获取错误信息
      console.error(errorMessage);
      return defaultResp;
    }

    return parsedResp.data;
  }
}
