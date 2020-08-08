const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});