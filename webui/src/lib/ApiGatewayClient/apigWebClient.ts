import ApiGatewayClient from ".";

const apigWebClient = new ApiGatewayClient({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.NEXT_PUBLIC_SERVER_PREFIX}`,
});

export default apigWebClient;
