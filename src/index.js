const app = require("./app/app");
const config = require("./config/config");
const connect = require("./db/db");
//require("./cron/sendMail.cron");

const port = config.SERVER.PORT;

connect();

app.listen(port, async () => {
  try {
    console.log("Connection has been established successfully.");
    console.log(`Server running in port http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
