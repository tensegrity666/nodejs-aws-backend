/* eslint-disable no-console */

import { Client } from 'pg';
import config from '../common/pg-config';
import { dropProducts, dropStocks } from './queries/ddl';

const dropDB = async () => {
  const client = new Client(config);
  await client.connect();

  try {
    await client.query(dropStocks);
    await client.query(dropProducts);

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

export default dropDB;
