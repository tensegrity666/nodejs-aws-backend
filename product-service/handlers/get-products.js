import productsMock from "../mocks/productsMock.json";

const getProducts = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(productsMock, null, 2),
  };

  return response;
};

export { getProducts };
