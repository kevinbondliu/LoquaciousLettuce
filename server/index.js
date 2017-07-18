'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.port || 3000;

app.get('/audio', (req, res) => {
  console.log('it reached at audo get');
  console.log(req.audio);
});


app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
}); 