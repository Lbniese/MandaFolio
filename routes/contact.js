const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/api/contact', (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // Specify what the email will look like
  const mailOpts = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Inquiry from ${req.body.name}`,
    text: `<b>Message</b>:
    ${req.body.message}
    
    <b>Contact Details</b>:
    Name: ${req.body.name}
    Email: ${req.body.email}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
      res.redirect('/contact');
      // res.send('contact-failure') // Show a page indicating failure
    } else {
      console.log(response);
      res.redirect('/contact');
      // res.send('contact-success') // Show a page indicating success
    }
  });
});

module.exports = {
  router,
};
