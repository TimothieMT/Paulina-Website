const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const password = 'G3rfl1x-22';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte füllen Sie alle Felder aus.' });
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'therapie.tolk@gmail.com',
      clientId: '34462262647-voau7i3ti2tb2a381ea53pob3rm7jpif.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//044PYOyZO6LW-CgYIARAAGAQSNwF-L9IrsONVtkrqiv40_Ib1TbXDHWWtnUXiRbahP6xvo2NkO3w-PbtqKOs64Z6cOE5uO9fKkB4',
    },
  });

  let mailOptions = {
    from: 'therapie.tolk@gmail.com',
    replyTo: email,
    to: 'therapie.tolk@gmail.com',
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      return res.status(500).json({ success: false, error: 'Fehler beim Senden der E-Mail.' });
    }
    console.log('E-Mail gesendet:', info.response);
    return res.json({ success: true, message: 'E-Mail wurde erfolgreich gesendet.' });
  });
});

app.listen(5100, () => {
  console.log('Server läuft auf Port 5100');
});