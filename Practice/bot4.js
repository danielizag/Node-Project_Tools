console.log('The follow bot is starting.');

var Twit = require('twit');
 
var config = require('./config'); 

var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed)
 
function followed(eventMsg){
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + ' thanks for the follow!')
}

function tweetIt(txt){

	console.log('You got a follow!');
	
	var r = Math.floor(Math.random()*100);

	var tweet = {
	status: txt
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