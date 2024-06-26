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

const prepareLeadData = (req) => {
  const { postcode, houseNumber, isOwner, yearlyElectricityUsage, consideringHeatPump, consideringEV, name, email, phone } = req.body;
  return {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_FROM,
    subject: 'Nieuw bericht van lead aanvraag formulier',
    template: 'lead-form',
    context: {
      postcode,
      houseNumber,
      isOwner,
      yearlyElectricityUsage,
      consideringHeatPump,
      consideringEV,
      name,
      email,
      phone
    },
  };
};

export const sendLeadRequestData = async (req, res) => {
  try {
    const leadData = prepareLeadData(req);
    const info = await sendEmail(leadData);
    res.status(200).send({ message: 'Email sent successfully', info });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

