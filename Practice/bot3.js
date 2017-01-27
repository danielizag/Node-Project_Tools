console.log('The bot is starting.');

var Twit = require('twit');
 
var config = require('./config'); 

var T = new Twit(config);
 
tweetSend();
setInterval(tweetSend, 1000*20)

function tweetSend(){
	var r = Math.floor(Math.random()*100);

	var tweet = {
	status: r + ' bot3... #twitterapiisalive'
	}

	T.post('statuses/update', tweet, tweeted);
	
	function tweeted(err, data, response) {
	  if (err) {
	  	console.log('System Error!');
	  } else {
	  	console.log('Successful Tweet!');
	  }
	}
}
