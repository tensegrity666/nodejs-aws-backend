import products from "../mocks/productsMock";

const getProductByIdFromMock = async (event, context) => {
  try {
    const product = products.filter(
      (element) => element.id === event.pathParameters.id
    );

    console.log(product)

    if (product.length === 0) {
      return {
        statusCode: 404,
        body: "Product not found",
      };
    }

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
      body: "Server Error",
    };
  }
};

export default getProductByIdFromMock;
