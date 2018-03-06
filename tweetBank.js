const _ = require('lodash');

let data = []; // list of tweets

function add (name, content) { // adds tweets
  data.push({
    name,
    content
  });
}

function list () { // list of all tweets, returns array of all tweets
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add,
  list,
  find
};

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesomeAdj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return 'Fullstack Academy is ' + randArrayEl(awesomeAdj) + '! The instructors are just so ' + randArrayEl(awesomeAdj) + '. #fullstacklove #codedreams';
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
