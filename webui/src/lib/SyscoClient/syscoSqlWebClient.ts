import SyscoClient from ".";

const syscoWebClient = new SyscoClient({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_SERVER_PREFIX}/api/sysco-sql-proxy`,
});

export default syscoWebClient;
