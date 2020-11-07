create table products (
	id uuid primary key default uuid_generate_v4(),
	title text,
	description text
)

drop table products

create extension if not exists "uuid-ossp"

insert into products (title, description) values
('Astronaut', 'Short Product Description 1')