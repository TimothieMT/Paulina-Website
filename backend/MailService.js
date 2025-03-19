const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// CORS aktivieren (für einen spezifischen Ursprung)
//app.use(cors({ origin: 'http://localhost:5173' }));

// Alternativ: Alle Ursprünge zulassen
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
      user: 'therapie.tolk@gmail.com',
      pass: 'G3rfl1x-22',
    },
  });

  let mailOptions = {
    from: email,
    to: 'therapie.tolk@gmail.com',
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'E-Mail wurde erfolgreich gesendet.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Fehler beim Senden der E-Mail.' });
  }
});

app.listen(5100, () => {
  console.log('Server läuft auf Port 5100');
});