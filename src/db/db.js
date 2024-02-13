const mongoose = require("mongoose");
const { DATABASE } = require("../config/config");

const uri = `mongodb://${DATABASE.dbUser}:${DATABASE.dbPassword}@${DATABASE.dbHost}:${DATABASE.dbPort}/${DATABASE.dbName}`;
//mongodb://root:Alvaro1516@localhost:27017/?authMechanism=DEFAULT
const connect = () => {
  console.log(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose
    .connect("mongodb://localhost:27017/notifications", {
      auth: { authSource: "admin" },
      user: DATABASE.dbUser,
      pass: DATABASE.dbPassword,
    })
    .then(() => {
      console.log("Database was connected successfully");
    })
    .catch((error) => {
      console.error("Database error: ", error.message);
    });
};

module.exports = connect;
