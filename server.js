const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Simulate saving or emailing
  console.log('📩 New Message Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Fallback route
app.get('/', (req, res) => {
  res.send('Dolab Backend is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
