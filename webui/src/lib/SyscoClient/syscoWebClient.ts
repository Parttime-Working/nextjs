import SyscoClient from ".";

const syscoWebClient = new SyscoClient({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/sysco-proxy`,
});

export default syscoWebClient;
