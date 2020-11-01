import productsMock from "../mocks/productsMock";

const getProductsList = async (event, context) => {
  try {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(productsMock, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: "Product not found",
    };
  }
};

export { getProductsList };
