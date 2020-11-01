import productsMock from "../mocks/productsMock";

const getProductsList = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(productsMock, null, 2),
  };
};

export { getProductsList };
