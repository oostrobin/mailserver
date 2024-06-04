// contactRouter.js
import express from 'express';
import { sendContactMessage, sendLeadRequest } from '../controllers/mail.controller.js';
import { validateContactData, validateLeadRequestData } from '../utils/email-validator.js';

const router = express.Router();

router.post('/send', validateContactData, (req, res) => {
  sendContactMessage(req, res);
});

router.post('/send-request', validateLeadRequestData, (req, res) => {
  sendLeadRequest(req, res);
});

export default router;
