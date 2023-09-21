import { MenuProps } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useMenu = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [, currentKey = "/"] = path.match(/^(?:(\/.*?(?:\/|$))|$)/) ?? [];
  const openKeys = searchParams.get("openKeys")?.split(",") ?? [];
  const onItemSelected: MenuProps["onSelect"] = (info) => {
    router.push(`${info.key}?${searchParams.toString()}`);
  };
  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const params = new URLSearchParams(searchParams);
    if (openKeys.length) {
      params.set("openKeys", openKeys.join(","));
    } else {
      params.delete("openKeys");
    }

    router.push(`?${params.toString()}`);
  };

  return { selectedKeys: [currentKey], openKeys, onItemSelected, onOpenChange };
};
