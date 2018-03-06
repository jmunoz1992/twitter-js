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
  if (err) return console.log(chalk.red('Error found: ', err));
  console.log('http://localhost:3000/ Listening to port 3000');
});

app.get('/', function (req, res, next) {
  // res.status(200);
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index.html', {title: 'Hall of Fame', people: people}, function (err, output) {
      if (err) return console.log(err);
      res.send(output);
    });
});

