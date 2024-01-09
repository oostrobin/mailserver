import transporter from '../config/nodemailer.config.js';
import dotenv from '../config/dotenv.config.js';

const sendContactMessage = (req, res) => {
  const { name, email, message, subject } = req.body;
  const mailData = {
    from: "info@zorgeloosbesparen.nl",
    to: "info@zorgeloosbesparen.nl",
    subject: 'Nieuw bericht van contactformulier',
    text: `From: ${name} Email: ${email} Message: ${message}`,
    html: `<p>From: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p><p>Subject: ${subject}</p>`,
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

