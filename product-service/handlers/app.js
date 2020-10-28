import productsMock from "../mocks/productsMock.json";

const getProducts = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(productsMock),
  };

  return response;
};

export { getProducts };
