import fetch from 'node-fetch';

export const getWeather = async (event, context) => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=17622236e3b5352e5d47b38be02d682f"
  );
  const data = await response.json();

  const { name, weather, sys, main } = data;
  const { country } = sys;
  const { description } = weather[0];
  const { temp } = main;

  const forecast =
    `${name}, ${country} ` +
    `weather: ${description} ` +
    `temperature: ${Math.round(Number(temp) - 273.15)} C ` +
    `via https://openweathermap.org/current`;

  return {
    statusCode: 200,
    body: JSON.stringify(forecast, null, 2),
  };
};
