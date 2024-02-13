const Joi = require("joi");

const to = Joi.string().email();
const message = Joi.string();
const subject = Joi.string();

const emailSchema = Joi.object({
  to: to.required(),
  message: message.required(),
  subject: subject.required()
});

module.exports = emailSchema;