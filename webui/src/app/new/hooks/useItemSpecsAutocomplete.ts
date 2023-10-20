"use client";

import syscoSqlWebClient from "@/lib/SyscoClient/syscoSqlWebClient";
import { useEffect, useState } from "react";

// senior time
type ItemSpec = {
  itemno: string;
  item_spec: string;
  um: string;
  value: string;
  label: string;
};

export const useItemSpecAutocomplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<ItemSpec[]>([]);

  const search = async (data: string) => {
    // GET http://localhost:3000/api/sysco-sql-proxy?$DB=SL&$TABLE=item_mst&$FLDS=item,description,u_m&item=$DB=SL&$TABLE=item_mst&$FLDS=item,description,u_m&item=99856** HTTP/1.1
    let paras: {
      $DB: string;
      $TABLE: string;
      $FLDS: string;
      $TOP: string;
      item?: string; // 將 item 視為可選屬性
    } = {
      $DB: "SL",
      $TABLE: "item_mst",
      $FLDS: "item,description,u_m,Uf_Spec",
      $TOP: "10",
    };

    // 過濾非英數字符
    data = data.replace(/[^(a-z)(A-Z)(0-9)]/g, "");
    if (data.length > 0) {
      paras.item = `${data}*`;
    }

    const result = await syscoSqlWebClient.search(paras);

    const items = result?.data?.Result?.item_mst ?? [];

    const options = items.map((item: unknown) => {
      // @ts-ignore:
      const itemno = item?.["item"]?.[0]?.["_"] ?? "";
      // @ts-ignore
      const item_spec = item?.["description"]?.[0]?.["_"] ?? "";
      // @ts-ignore
      const um = item?.["u_m"]?.[0]?.["_"] ?? "";
      // @ts-ignore
      const Uf_Spec = item?.["Uf_Spec"]?.[0]?.["_"] ?? "";

      return {
        // @ts-ignore
        ...item,
        // @ts-ignore
        value: itemno,
        label: `${itemno} ${item_spec} ${um}`,
        item_spec: `${item_spec}\n${Uf_Spec} ${um}`,
      };
    });

    setSearchValue(data);
    setOptions(options);
  };

  return {
    searchValue,
    options,
    search,
  };
};
