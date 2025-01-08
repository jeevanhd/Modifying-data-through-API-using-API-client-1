const express = require("express");
const { resolve } = require("path");

const app = express();
const port = process.env.PORT || 8080;

const connect = require("./database");
const routes = require("./routs");
app.use(express.json());
app.use(express.static("static"));
require("dotenv").config();

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.use("/api", routes);

app.listen(port, () => {
  connect();
  console.log(`server started at http://localhost:${port}`);
});
