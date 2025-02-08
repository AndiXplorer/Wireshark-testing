const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const message = req.body.message;

  console.log(`Received data: Name: ${name}, Message: ${message}`);
  res.send('Data received successfully!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://urip:${port}`);
});
