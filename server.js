const express = require("express");
const path = require("path");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");

const PORT = 8000;

const swaggerDocument = YAML.load(path.join(__dirname, "../nodejs-aws-be/product-service/doc/swagger.yaml"));

const app = express();
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.send("Service is running!");
    return;
  }
  next();
});

app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );