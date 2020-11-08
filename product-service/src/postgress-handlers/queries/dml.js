const insertInitialProducts = `insert into products ("title", "description", "picture", "price") values
('Astronaut', 'Short Product Description 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRix0ilaGYV0Vw2NKJofFBV0M8M-ACWRZhAsw&usqp=CAU', 99),
('Fox', 'Short Product Description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhOVE6UDSrtvlD46SF1MB-k-h1177aASQhZg&usqp=CAU', 49),
('Girl', 'Short Product Description 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcwNMJZ8NEWfAEl32fF8JO5y6QcIh4Cfmgmg&usqp=CAU', 19),
('Aquaman', 'Short Product Description 4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQT0-UT6PpFZ0h6vOdkr61sj72iJDPS94y5g&usqp=CAU', 12),
('Scientist', 'Short Product Description 5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTN5ZiQp3PvddDc2QqBksDIYX8hJIDD32sSA&usqp=CAU', 15),
('Jungkook', 'Short Product Description 5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp-DNVm76b_oRRmtXPi3IJdQpmngp5-gQvOg&usqp=CAU', 33)`;

const insertInitialStocks = `insert into stocks ("list_id", "count") values
('6a5f9741-7ea0-4f56-b37b-25f8ad5c7187', 2),
('c528cb4b-b705-4ed2-b15c-a0355bb5eaf1', 7),
('508265df-85f0-4544-bea5-43d16cbee551', 8),
('ae23e121-df72-44ea-a850-2f7d6ed6bfc4', 17),
('fa400c06-0a32-4b66-85f9-efd04300d3d6', 7),
('15c471bc-aabd-4c5b-bdb5-9b010b7c53a7', 1)`;

const selectAllProducts = 'select * from products';

export {
  insertInitialProducts,
  insertInitialStocks,
  selectAllProducts,
};
