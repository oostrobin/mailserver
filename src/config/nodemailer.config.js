import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
      partialsDir: path.resolve('src/views'),
      defaultLayout: false,
  },
  viewPath: path.resolve('src/views'),
};

transporter.use('compile', hbs(handlebarOptions))

export default transporter;