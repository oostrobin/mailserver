import transporter from "../config/nodemailer.config.js";


export const sendEmail = (mailData) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
 };