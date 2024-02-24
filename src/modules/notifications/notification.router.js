const express = require("express");
const authToken = require("../../middleware/authToken.middleware");
const schemaValidator = require("../../middleware/schemaValidator.middleware");
const emailSchema = require("../notifications/schema/notification.schema");
const { ROLES } = require("../../config/config");
const { enQueue } = require("./controller/notification.controller");

const notificationRouter = express.Router();

notificationRouter.post("/", authToken([ROLES.ADMIN, ROLES.USER]), schemaValidator(emailSchema), async (req, res) => {
  const response = await enQueue(req.body);
  
  res.status(201).json({
    message: response,
  });
});

module.exports = notificationRouter;
