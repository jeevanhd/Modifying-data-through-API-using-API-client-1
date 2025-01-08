const mongoose = require("mongoose");

const connect = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then((data) => {
      console.log("Connected to the database", data.connection.host);
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error.message);
    });
};

module.exports = connect;
