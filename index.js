const express = require("express");
const { resolve } = require("path");
require("dotenv").config();

const connect = require("./database");
const routes = require("./routs");

app.use(express.static("static"));
app.use(express.json());

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.use("/api", routes);

app.listen(port, () => {
  connect();
  console.log(`server started at http://localhost:${port}`);
});
