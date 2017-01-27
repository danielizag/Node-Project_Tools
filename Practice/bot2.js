console.log('The bot is starting.');

var Twit = require('twit');
 
var config = require('./config'); 

var T = new Twit(config);

var tweet = {
	status: 'hello world! from node.js! #twitterapiisalive'
}

T.post('statuses/update', tweet, tweeted);
 
function tweeted(err, data, response) {
  if (err) {
  	console.log('System Error!');
  } else {
  	console.log('Successful Tweet!');
  }
}