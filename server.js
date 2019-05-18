const express = require('express');
const app = express();
const port = 3000

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.get('/', (req, res) => {
  console.log("GET /");
  res.send({msg: process.env.ENV_FROM_CODEBUILD});
});

app.listen(port, () => console.log(`listening on port ${port}`));
