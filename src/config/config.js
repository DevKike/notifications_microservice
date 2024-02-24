const { config } = require("dotenv");
config();

module.exports = {
  SERVER: {
    PORT: process.env.PORT || 3001,
  },
  DATABASE: {
    dbUser: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
  },
  TOKEN: {
    jwtToken: process.env.SECRET_ACCESS_TOKEN,
  },
  ROLES: {
    ADMIN: "admin",
    USER: "user"
  },
  MICROSERVICES: {
    USER: process.env.USER_MICROSERVICE_URL,
  },
  EMAIL: {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.EMAIL_PASSWORD,
    SERVICE: process.env.EMAIL_SERVICE,
    PORT: process.env.EMAIL_PORT
  }
};