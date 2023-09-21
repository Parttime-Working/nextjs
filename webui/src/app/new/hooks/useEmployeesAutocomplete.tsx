"use client";

import syscoWebClient from "@/lib/SyscoClient/syscoWebClient";
import { useEffect, useState } from "react";

// senior time
type Employee = { value: string, cname: string }

export const useEmployeesAutocomplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState<Employee[]>([]);
  const [allOptions, setAllOptions] = useState<Employee[]>([]);

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
            cname,
            value,
            label: `${value}(${cname})`,
          };
        });

        setAllOptions(tempOptions);
      });
  }, []);

  const search = async (data: string) => {
    // filter options
    const tempOptions = allOptions.filter((option: { value: string }) => {
      return option.value.includes(data);
    });

    setSearchValue(data);
    setOptions(tempOptions);
  };

  return {
    searchValue,
    search,
    options,
  };
};
