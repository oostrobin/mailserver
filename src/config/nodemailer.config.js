import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { handlebarOptions } from './handlebar.config.js';


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});


transporter.use('compile', hbs(handlebarOptions))

export default transporter;