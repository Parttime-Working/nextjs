import ApiGatewayClient from ".";

const apigWebClient = new ApiGatewayClient({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000"}${
    process.env.NEXT_PUBLIC_SERVER_PREFIX ?? "/items"
  }`,
});

export default apigWebClient;
