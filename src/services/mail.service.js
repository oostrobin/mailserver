import transporter from "../config/nodemailer.config.js";


export const sendEmail = async (mailData) => {
  try {
    const info = await transporter.sendMail(mailData);
    return info;
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case "ECONNREFUSED":
        errorMessage = "Failed to connect to the mail server. Please try again later.";
        break;
      case "EENVELOPE":
        errorMessage = "Invalid email envelope. Please check the recipient and sender addresses.";
        break;
      default:
        errorMessage = "An error occurred while sending the email. Please try again later.";
        break;
    }
    return { error: errorMessage };
  }
};
