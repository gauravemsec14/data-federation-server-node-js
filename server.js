const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define an array to hold the data from each federated source
let federatedData = [];

// Route to receive data from a federated source
app.post('/federate', (req, res) => {
  const newData = req.body;

  // Add the new data to the federatedData array
  federatedData.push(newData);

  res.status(200).send('Data received');
});

// Route to retrieve all federated data
app.get('/federate', (req, res) => {
  res.json(federatedData);
});

// Start the server
app.listen(3000, () => console.log('Data Federation Server listening on port 3000'));