import SyscoClient from "@/lib/SyscoClient";

export const syscoSqlProxyClient = new SyscoClient({
  baseURL: "http://syspx.sysco/getsqlxml.asp",
});
