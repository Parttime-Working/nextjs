import SyscoClient from "@/lib/SyscoClient";

const syscoProxyClient = new SyscoClient({
  baseURL: "https://w3.sysco.tw/intranet.nsf/GetEmpXml",
  // baseURL: "http://syspx.sysco/getsqlxml.asp",
});

export default syscoProxyClient;
