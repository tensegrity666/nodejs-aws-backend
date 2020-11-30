const createTableProducts = `create table if not exists products (
  "id" uuid default uuid_generate_v4(),
  "title" text not null,
  "description" text,
  "picture" text,
  "price" integer,
  primary key ("id")
)`;

const createTableStocks = `create table if not exists stocks (
  "id" uuid default uuid_generate_v4(),
  "list_id" uuid,
  "count" integer,
  primary key ("id"),
  foreign key ("list_id") references products("id")
)`;

const dropProducts = 'drop table products';
const dropStocks = 'drop table stocks';

export {
  createTableStocks,
  createTableProducts,
  dropProducts,
  dropStocks,
};
