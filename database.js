const mongoose = require("mongoose");

const connect = async () => {
  const MONGO_URI =
    process.env.MONGO_URI ;

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error.message);
    });
};

module.exports = connect;
