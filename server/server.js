const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('client'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('There was an error in starting the server: ', err);
  }

  console.log(`server is listening on ${port}`);
})