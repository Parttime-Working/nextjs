"use client";

import { CollapseType } from "antd/es/layout/Sider";
import { useRouter, useSearchParams } from "next/navigation";

export default function useCollapse() {
  const searchParams = new URLSearchParams(useSearchParams());
  const router = useRouter();

  const collapsed = searchParams.get("collapsed") === "true";

  function handleCollapse(collapsed: boolean, type?: CollapseType): void {
    if (collapsed) {
      searchParams.set("collapsed", String(collapsed));
    } else {
      searchParams.delete("collapsed");
    }

    router.push(`?${searchParams.toString()}`);
  }

  return {
    collapsed,
    handleCollapse,
  };
}
