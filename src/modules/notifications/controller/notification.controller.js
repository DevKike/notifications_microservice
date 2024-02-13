const { addEmail, deleteEmail } = require("../service/notification.service");

const enQueue = async (email) => {
  try {
    return await addEmail(email);
  } catch (error) {
    return false;
  }
};

const deQueue = async (id) => {
  try {
    return await deleteEmail(id);
  } catch (error) {
    throw error;
  }
};

module.exports = { enQueue, deQueue };
