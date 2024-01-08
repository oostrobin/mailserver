const express = require("express");
const router = express.Router();
const transporter = require("../config/mail.config");

router.post("/send-email", (req, res, next) => {
    const { email, subject, message } = req.body;
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: email,
        subject: subject,
        text: message,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({ message: "Email sent" });
        }
    });
}
);

module.exports = router;