import ItemApiClient from "./ItemApiClient";

// 環境變數
const server_url= `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;
// 這邊是client side call api
const itemApiClient = new ItemApiClient({ baseURL: server_url });

export default itemApiClient;
