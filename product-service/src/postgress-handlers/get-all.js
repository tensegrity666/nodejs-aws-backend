/* eslint-disable no-console */

import { Client } from 'pg';
import config from '../common/pg-config';

const getProductsList = async () => {
  const client = new Client(config);
  await client.connect();

  try {
    const { rows } = await client.query('select * from products');

    console.log(`Product list: ${JSON.stringify(rows, null, 2)}`);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(rows, null, 2),
    };
  } catch (err) {
    console.log(`Failed to get product list: ${err.message}`);

    return {
      statusCode: 500,
      body: 'Server Error',
    };
  } finally {
    client.end();
  }
};

export default getProductsList;
