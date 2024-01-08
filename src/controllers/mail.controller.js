import transporter from '../config/nodemailer.config.js';

const sendContactMessage = (req, res) => {
  const { name, email, message } = req.body;
  const mailData = {
    from: process.env.MAIL_FROM,
    to: email,
    subject: 'New Message from Contact Form',
    text: `From: ${name} Email: ${email} Message: ${message}`,
    html: `<p>From: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(200).send({ message: 'Email sent successfully', info });
    }
  });
};

export { sendContactMessage };