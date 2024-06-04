import { sendEmail } from "../services/mail.service.js";

const prepareEmailData = (req) => {
  const { name, email, message, subject } = req.body;
  return {
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
 };

 const sendContactMessage = async (req, res) => {
  try {
    const mailData = prepareEmailData(req);
    const info = await sendEmail(mailData);
    res.status(200).send({ message: 'Email sent successfully', info });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
 };

export { sendContactMessage };

const prepareQuoteData = (req) => {
  const { name, email, postcode, houseNumber, addition, consideringEv, consideringHeatPump, isOwner, phone, yearlyElectricityUsage } = req.body;
  return {
    from: process.env.MAIL_FROM,
    to: "oostrobin@protonmail.com",
    subject: 'Nieuw bericht van lead aanvraag formulier',
    template: 'lead-request',
    context: {
      postcode,
      houseNumber,
      addition,
      consideringEv,
      consideringHeatPump,
      email,
      isOwner,
      name,
      phone,
      yearlyElectricityUsage
    },
  };
};

export const sendLeadRequest = async (req, res) => {
  try {
    const mailData = prepareQuoteData(req);
    const info = await sendEmail(mailData);
    res.status(200).send({ message: 'Email sent successfully', info });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

