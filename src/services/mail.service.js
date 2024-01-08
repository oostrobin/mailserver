import transporter from "../config/nodemailer.config.js";


const sendEmail = (mailData, callback) => {
    transporter.sendMail(mailData, callback);
  };

  export { sendEmail };