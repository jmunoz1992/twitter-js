const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', function (req, res) {
  res.send('Wiki home page');
});

app.get('/news', function (req, res) {
  res.send('About this news');
});

