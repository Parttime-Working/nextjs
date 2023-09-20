"use client";

import syscoWebClient from "@/lib/SyscoClient/syscoWebClient";
import { AutoComplete } from "antd";
import { useEffect, useState } from "react";

// senior time

export const useEmployeesAutocomplete = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [allOptions, setAllOptions] = useState<{ value: string }[]>([]);

  useEffect(() => {
    // get all options from the useless api
    syscoWebClient
      .search({
        Open: "",
        comp: "SYS",
        fields: "cname,dcode,dptname,level",
      })
      .then((result) => {
        const employees = result?.data?.emprecords?.employee ?? [];
        const tempOptions = employees.map((employee: unknown) => {
          // @ts-ignore
          const value = employee?.["$"]?.empid ?? "";
          // @ts-ignore
          const cname = employee?.cname?.[0] ?? "";

          return {
            // @ts-ignore
            ...employee,
            // @ts-ignore
            value,
            label: `${value}(${cname})`,
          };
        });

        setAllOptions(tempOptions);
      });
  }, []);

  const onChange = async (data: string) => {
    // filter options
    const tempOptions = allOptions.filter((option: { value: string }) => {
      return option.value.includes(data);
    });

    setValue(data);
    setOptions(tempOptions);
  };

  return {
    searchValue: value,
    options,
    onOptionChange: onChange,
  };
};
