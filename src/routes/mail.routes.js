// contactRouter.js
import express from 'express';
import { sendContactMessage, sendLeadRequestData } from '../controllers/mail.controller.js';
import { validateContactData } from '../utils/email-validator.js';
import { validateLeadFormData } from '../utils/lead-validator.js';

const router = express.Router();

router.post('/send', validateContactData, (req, res) => {
  sendContactMessage(req, res);
});

router.post('/send-lead', validateLeadFormData, (req, res) => {
  sendLeadRequestData(req, res);
});

export default router;
