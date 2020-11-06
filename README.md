### Frontend ([link to fe-repo](https://github.com/tensegrity666/nodejs-aws-fe/pull/2)):
https://d4b3oofc3xqi9.cloudfront.net

### Backend (branch __dev__)
* API get all products:
https://jqnaa7z9ua.execute-api.eu-west-1.amazonaws.com/dev/product

* API get product by id (example with one of id's):
https://jqnaa7z9ua.execute-api.eu-west-1.amazonaws.com/dev/product/5f99e930357fbc609a40fbbe
- - - 
### SWAGGER:
__In root__ run<br>
`npm start`<br>
then open `http://localhost:8000/doc/`<br>

_swaggerfile contains in /product-servive/doc/swagger.yaml_<br>
__Product schema:__<br>
```

  {
    "id": "string",
    "description": "string",
    "title": "string",
    "price": 0,
    "picture": "string",
    "count": 0
  }

```
- - -
### Example of lambda with async/await call via OpenWeather API
`/open-weather-service`
https://c0ipqhw2a7.execute-api.us-east-1.amazonaws.com/dev/weather
