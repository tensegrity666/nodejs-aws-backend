import { Client } from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 5000,
};

const invoke = async (event) => {
  const client = new Client(dbOptions);
  await client.connect();

  try {
    const colResult = await client.query(`
      create table if not exists products (
        id serial primary key,
        title text
      )`)

    const { rows: products } = await client.query('select * from products');
    console.log(products);
    console.log(colResult)
    console.log(event)
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

export default invoke;
