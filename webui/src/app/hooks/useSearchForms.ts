import {
  Form,
  PaginationResponse,
} from "@/lib/ApiGatewayClient/services/responses/FormSearchResponseSchema";
import { useEffect, useState } from "react";
import { FormSearchParams } from "../api/v1/forms/lib/FormSearchParamsSchema";
import apigWebClient from "@/lib/ApiGatewayClient/apigWebClient";
import { DateTime } from "luxon";
import { ZodIssue } from "zod";

const useSearchForms = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [forms, setForms] = useState<Form[]>([]);
  const [searchParams, setSearchParams] = useState<Partial<FormSearchParams>>({
    page: 1,
    pageSize: 25,
  });
  const [pagination, setPagination] = useState<PaginationResponse>({
    page: 1,
    pageSize: 25,
    total: 0,
    totalPages: 1,
  });

  useEffect(() => {
    setIsLoading(true);
    setErrors([]);

    apigWebClient.form
      .search(searchParams)
      .then((resp) => {
        setIsLoading(false);

        const { items, ...serverRespPagination } = resp;

        const cvTimeItems = items.map((item) => ({
          ...item,
          created_at:
            DateTime.fromISO(item.created_at, {
              zone: "utc",
            })
              .setZone("Asia/Taipei")
              .setLocale("zh-tw")
              .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY) ?? "",
        }));

        // console.log("hook data", items);
        // console.log("TZ Changed:", cvTimeItems);
        setForms(cvTimeItems);
        setPagination(serverRespPagination);
      })
      .catch(
        (e: {
          errors: ZodIssue[]; // we can use type/interface to ensure our api resp format
        }) => {
          setIsLoading(false);
          setErrors(e.errors);
        }
      );
    // useEffect can cancel request, but I forgot how to do that
  }, [searchParams]);

  return {
    forms,
    pagination,
    searchParams,
    setSearchParams,
    isLoading,
    errors,
  };
};

export default useSearchForms;
