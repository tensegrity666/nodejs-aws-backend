import { Client } from 'pg';
import config from '../common/pg-config';

const getProductByIdFromMock = async (event) => {
  const client = new Client(config);
  await client.connect();

  try {
    const product = await client.query(`select * from products
    where id = ${event.pathParameters.id}`);

    console.log(product);

    if (product === null) {
      return {
        statusCode: 404,
        body: 'Product not found',
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(product, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};

export default getProductByIdFromMock;
