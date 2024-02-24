const mongoose = require("mongoose");
const { DATABASE } = require("../config/config");

const uri = `mongodb://${DATABASE.dbUser}:${DATABASE.dbPassword}@${DATABASE.dbHost}:${DATABASE.dbPort}`;

const connect = () => {
  mongoose.connect(uri, {
      dbName: DATABASE.dbName,
    })
    .then(() => {
      console.log("Database was connected successfully");
    })
    .catch((error) => {
      console.error("Database error: ", error.message);
    });
};

module.exports = connect;
