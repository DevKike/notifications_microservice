const cron = require("node-cron");
const Email = require("../modules/notifications/model/notification.model");
const { sendMail } = require("../util/mailer");
const { deQueue } = require("../modules/notifications/controller/notification.controller");

(() => {
  const sendMailCrone = async (email) => {
    try {
      await sendMail({ ...email, html: email.message });
      return email;
    } catch (error) {
      throw error;
    }
  };
  cron.schedule("*/10 * * * * *", async () => {
    console.log("Crone init");
    const emails = await Email.find().sort({ createdAt: "asc" }).limit(10);
    const sendMailPromise = [];
    for (const email of emails) {
      sendMailPromise.push(sendMailCrone(email.toJSON()));
    }

    const responses = await Promise.allSettled(sendMailPromise);
    console.log(responses);
    
    const promiseDelete = [];
    for (const response of responses) {
      if (response.status === "fulfilled") {
        promiseDelete.push(deQueue(response.value._id));
      }
    }
    await Promise.allSettled(promiseDelete);
  });
})();
