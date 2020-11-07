const createTableProducts = `create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  price integer
)`;

const createTableStocks = `create table if not exists stocks (
  id uuid primary key default uuid_generate_v4(),
  list_id uuid,
  foreign key ("list_id") references "products" ("id"),
  count integer
)`;

export { createTableStocks, createTableProducts };
