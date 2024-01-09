import transporter from '../config/nodemailer.config.js';
import dotenv from '../config/dotenv.config.js';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

const sendContactMessage = (req, res) => {
  const { name, email, message, subject } = req.body;
  const mailData = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_FROM,
    subject: 'Nieuw bericht van contactformulier',
    template: 'contact-form',
    context: {
      name,
      email,
      message,
      subject,
    },
  };

  const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('src/views'),
        defaultLayout: false,
    },
    viewPath: path.resolve('src/views'),
};

transporter.use('compile', hbs(handlebarOptions))

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(200).send({ message: 'Email sent successfully', info });
    }
  });
};

export { sendContactMessage };

