const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const jsonParser = bodyParser.json();

// Middleware to parse the incoming request body
app.use(jsonParser);

// Define the POST endpoint
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  console.log(`Received data: Name: ${name}, Message: ${message}`);
  res.status(200).send('Data received successfully!');
});

// Export the serverless function
module.exports = (req, res) => {
  app(req, res);
};
