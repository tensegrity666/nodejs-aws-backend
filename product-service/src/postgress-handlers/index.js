import { Client } from 'pg';
import config from '../common/pg-config';
import { createTableProducts, createTableStocks } from './queries/ddl';
import { selectAllProducts, selectAllStocks } from './queries/dml';

const createDB = async (event) => {
  const client = new Client(config);
  await client.connect();

  try {
    await client.query(createTableProducts);
    await client.query(createTableStocks);

    const { rows: allProducts } = await client.query(selectAllProducts);
    const { rows: allStocks } = await client.query(selectAllStocks);

    console.log(allProducts);
    console.log(allStocks);
    console.log(event);

    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: 'Success',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  } finally {
    client.end();
  }
};

export default createDB;
