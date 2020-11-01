import products from "../mocks/productsMock";

const getProductById = async (event, context) => {
  const product = products.filter(
    (element) => element.id === event.pathParameters.id
  );

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(product, null, 2),
  };
};

export { getProductById };
