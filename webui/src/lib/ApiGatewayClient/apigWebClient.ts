import ApiGatewayClient from ".";

const apigWebClient = new ApiGatewayClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default apigWebClient;
