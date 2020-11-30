/* eslint-disable no-console */

import { Client } from 'pg';
import config from '../common/pg-config';
import { insertInitialProducts, insertInitialStocks } from './queries/dml';

const initDB = async (event) => {
  const client = new Client(config);
  await client.connect();

  try {
    const { rows: products } = await client.query(insertInitialProducts);
    await client.query(insertInitialStocks);

    console.log(`Event object: ${JSON.stringify(event, null, 2)}`);
    console.log(products);

    return {
      statusCode: 204,
      body: JSON.stringify(products, null, 2),
    };
  } catch (err) {
    console.log(`Failed to update: ${err.message}`);

    return {
      statusCode: 500,
      body: 'Server Error',
    };
  } finally {
    client.end();
  }
};

export default initDB;
