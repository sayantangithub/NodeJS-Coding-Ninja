const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sayantan.bhattacharya16@gmail.com",
    pass: "beda yjah sjif kjix",
  },
});

const mailOption = {
  from: "sayantan.bhattacharya16@gmail.com",
  to: "sayantan.bhattacharya16@gmail.com",
  subject: "Hello from Node.js",
  text: "This is test email send from Node.js, using Nodemailer",
};
transporter.sendMail(mailOption, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Sent", info.response);
  }
});
