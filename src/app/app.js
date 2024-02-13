const express = require("express");
const morgan = require("morgan");
const notificationRouter = require("../modules/notifications/notification.router");
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/notification", notificationRouter);

module.exports = app;
