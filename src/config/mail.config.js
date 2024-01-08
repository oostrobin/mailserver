const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // e.g., 'gmail'
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

module.exports = transporter;