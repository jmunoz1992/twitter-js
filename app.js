const express = require('express');
const app = express();
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(express.static('public'));
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });// point nunjucks to the proper directory for templates

app.use(volleyball);
app.use('/', routes);

app.listen(3000, (err) => {
  if (err) throw console.log(chalk.red('Error found: ', err));
  console.log('Listening on port 3000');
});


// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.path + ' / ' + res.statusCode);  // should be GET /
//   next();
// });

// app.use('/special', (req, res, next) => {
//   console.log('You are in a special area');
// });

app.get('/', function (req, res, next) {
  // res.status(200);
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index.html', {title: 'Hall of Fame', people: people}, function (err, output) {
      if (err) return console.log(err);
      res.send(output);
    });
});

// app.get('/news', function (req, res, next) {
//   res.status(200).send('News Page!');
// });
