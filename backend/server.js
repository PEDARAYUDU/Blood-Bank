const express = require('express');
const app = express();
const port = 5000;

// Define a route for handling GET requests
app.get('/api/sample', (req, res) => {
  res.send('Hello, this is a GET request response!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
