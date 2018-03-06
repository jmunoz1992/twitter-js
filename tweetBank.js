const _ = require('lodash');

let data = [ { name: 'Kate Claujure',
content: 'Fullstack Academy is sweet! The instructors are just so amazing. #fullstacklove #codedreams' },
{ name: 'Gabriel OLogn',
content: 'Fullstack Academy is awesome! The instructors are just so awesome. #fullstacklove #codedreams' },
{ name: 'Karen Docsreader',
content: 'Fullstack Academy is impressive! The instructors are just so impressive. #fullstacklove #codedreams' },
{ name: 'Kate Ternary',
content: 'Fullstack Academy is wonderful! The instructors are just so sweet. #fullstacklove #codedreams' },
{ name: 'Dan Ecma',
content: 'Fullstack Academy is breathtaking! The instructors are just so breathtaking. #fullstacklove #codedreams' },
{ name: 'Geoff Docsreader',
content: 'Fullstack Academy is wonderful! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ name: 'Scott OLogn',
content: 'Fullstack Academy is amazing! The instructors are just so breathtaking. #fullstacklove #codedreams' },
{ name: 'Nimit Ternary',
content: 'Fullstack Academy is mindblowing! The instructors are just so impressive. #fullstacklove #codedreams' },
{ name: 'Dan Binder',
content: 'Fullstack Academy is breathtaking! The instructors are just so amazing. #fullstacklove #codedreams' },
{ name: 'Shanna Ecma',
content: 'Fullstack Academy is wonderful! The instructors are just so breathtaking. #fullstacklove #codedreams' } ]; // list of tweets

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

// for (let i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

// console.log(data);
