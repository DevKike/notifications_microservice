const nodemailer = require("nodemailer");
const { EMAIL } = require("../config/config");

const transport = nodemailer.createTransport({
  service: EMAIL.SERVICE,
  secure: false,
  auth: {
    user: EMAIL.EMAIL,
    pass: EMAIL.PASSWORD,
  },
});

const sendMail = async (emailInfo) => {
  try {
    console.log("emailInfo", emailInfo);
    await transport.sendMail({
      from: EMAIL.EMAIL,
      to: emailInfo.to,
      subject: emailInfo.subject,
      html: emailInfo.html,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { sendMail };
