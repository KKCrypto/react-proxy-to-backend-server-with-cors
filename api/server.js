const requestProm = require('request-promise');
const crypto = require('crypto');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));


app.get('/api/getExchangeInfo', (req, res) => {
  requestProm({
    method: 'GET',
    url: 'https://api.binance.com/api/v3/exchangeInfo',
    resolveWithFullResponse: true
  })
  .then((r1) => {
    res.send(JSON.parse(r1.body))
  })
  .catch(err => {
    console.log(err)
  })
})



app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});