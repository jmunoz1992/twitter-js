const router = require('express').Router();
const tweetBank = require('../tweetBank');

// router.get('/stylesheets/style.css', function (req, res) {
//   res.send('/stylesheets/style.css');
// });


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
