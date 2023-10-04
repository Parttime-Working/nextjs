"use client";

import syscoSqlWebClient from "@/lib/SyscoClient/syscoSqlWebClient";
import { useEffect, useState } from "react";

// senior time
type ItemSpec = { itemno: string; item_spec: string; um: string, value: string };

export const useItemSpecAutocomplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<ItemSpec[]>([]);

  const search = async (data: string) => {
    // GET http://localhost:3000/api/sysco-sql-proxy?$DB=SL&$TABLE=item_mst&$FLDS=item,description,u_m&item=$DB=SL&$TABLE=item_mst&$FLDS=item,description,u_m&item=99856** HTTP/1.1
    const result = await syscoSqlWebClient.search({
      $DB: "SL",
      $TABLE: "item_mst",
      $FLDS: "item,description,u_m",
      $TOP: "10",
      item: `${data}*`,
    });

    const items = result?.data?.Result?.item_mst ?? [];
    const options = items.map((item: unknown) => {
      // @ts-ignore:
      const itemno = item?.["item"]?.[0]?.["_"] ?? "";
      // @ts-ignore
      const item_spec = item?.["description"]?.[0]?.["_"] ?? "";
      // @ts-ignore
      const um = item?.["u_m"]?.[0]?.["_"] ?? "";

      return {
        // @ts-ignore
        ...item,
        // @ts-ignore
        itemno,
        item_spec,
        um,
        value: itemno,
        label: `${item_spec} ${um}`
      };
    });

    console.log(options, 'optionssss')

    setSearchValue(data);
    setOptions(options);
  };

  return {
    searchValue,
    options,
    search,
  };
};
