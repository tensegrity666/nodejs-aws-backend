/* eslint-disable no-console */

import { Client } from 'pg';
import config from '../common/pg-config';

const addProduct = async (event) => {
  const client = new Client(config);
  await client.connect();

  try {
    if (event === undefined || event === null) {
      return {
        statusCode: 400,
        body: 'Event object is empty',
      };
    }

    console.log(JSON.stringify(event, null, 2));

    await client.query(`insert into products ("title", "description", "picture", "price") values
    ('${event.title}', '${event.description}', '${event.picture}', ${event.price})`);

    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: 'Success',
    };
  } catch (err) {
    console.log(`Operation failed: ${err.message}`);

    return {
      statusCode: 500,
      body: 'Server Error',
    };
  } finally {
    client.end();
  }
};

export default addProduct;
