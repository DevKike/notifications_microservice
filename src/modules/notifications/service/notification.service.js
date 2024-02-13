const Email = require("../model/notification.model");

const addEmail = async (email) => {
  try {
    await new Email(email).save();
    return true;
  } catch (error) {
    throw error;
  }
};

const deleteEmail = async (id) => {
  try {
    await Email.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { addEmail, deleteEmail };
