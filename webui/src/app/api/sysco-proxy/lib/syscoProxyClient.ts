import SyscoClient from "@/lib/SyscoClient";

export const syscoProxyClient = new SyscoClient({
  baseURL: "https://w3.sysco.tw/intranet.nsf/GetEmpXml",
  // baseURL: "http://syspx.sysco/getsqlxml.asp",
});
