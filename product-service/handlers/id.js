import products from "../mocks/productsMock";

const getProductById = async (event, context) => {
  try {
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
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error",
    };
  }
};

export { getProductById };