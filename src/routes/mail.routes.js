// contactRouter.js
import express from 'express';
import { sendContactMessage } from '../controllers/mail.controller.js';
import { validateContactData } from '../utils/email-validator.js';

const router = express.Router();

router.post('/send', validateContactData, (req, res) => {
  sendContactMessage(req, res);
});

export default router;
