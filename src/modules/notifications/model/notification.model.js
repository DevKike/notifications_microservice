const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    to: {
      type: String,
    },
    message: {
      type: String,
    },
    subject: {
      type: String,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Email = mongoose.model("Email", schema);

module.exports = Email;
