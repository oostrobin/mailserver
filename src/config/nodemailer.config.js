import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  secure: false,
  auth: {
    user: "oostrobin1989@gmail.com",
    pass: "2rOLxadmbK4VRUSD",
  },
});



export default transporter;