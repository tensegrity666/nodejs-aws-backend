/* eslint-disable no-console */

import { Client } from 'pg';
import config from '../common/pg-config';
import { createTableProducts, createTableStocks } from './queries/ddl';

const createDB = async (event) => {
  const client = new Client(config);
  await client.connect();

  try {
    await client.query(createTableProducts);
    await client.query(createTableStocks);

    console.log(`Event object: ${JSON.stringify(event, null, 2)}`);

    return {
      statusCode: 204,
      body: 'Success',
    };
  } catch (err) {
    console.log(`Failed to connect: ${err.message}`);

    return {
      statusCode: 500,
      body: 'Server Error',
    };
  } finally {
    client.end();
  }
};

export default createDB;
