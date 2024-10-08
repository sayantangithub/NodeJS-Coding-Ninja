# Sending Email in NodeJS

Sending emails in Node.js is typically done using third-party libraries or services.

## Understanding SMTP and Nodemailer

- SMTP (Simple Mail Transfer Protocol) is the protocol used for sending email messages between servers.
- Nodemailer is a popular package in Node.js used for sending emails.
- To use Nodemailer, it needs to be installed using the command: `npm install nodemailer`

## Sending Emails with Nodemailer

Here's the code snippet to demonstrate how to use Nodemailer to send emails in
Node.js:

```javascript
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
```

Explanation:

- First, the Nodemailer package is imported into the script.
- Then, a transporter object is created using the createTransport method,
  specifying the email service (e.g., Gmail) and providing the email address and
  password for authentication.
- Next, an email configuration object (mailOptions) is defined, including the
  sender, recipient, subject, and text of the email.
- Finally, the sendMail method is called on the transporter object, passing the
  mailOptions object. The callback function handles the response, logging any
  errors or the success message.
