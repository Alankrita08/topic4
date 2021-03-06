const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;
app.use(express.static('public'));


  app.get('/', function (req, res) {
    res.sendFile(`${base}/deviceslist.html`);
  });

  app.get('/registerlist', (req, res) => {
    res.sendFile(`${base}/registerlist.html`);
  });
  
  app.get('/iotapplication', (req, res) => {
    res.sendFile(`${base}/iotapplication.html`);
  });

  app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  