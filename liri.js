// Load the fs package to read and write
var fs = require("fs");
// Include the request npm package. (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
// grabs twitter keys from other file
var twitterKeys = require("./keys.js")
var Twitter = require('twitter');
var spotify = require('spotify');
var inquirer = require('inquirer');
var input = process.argv[2];
var inputTwo = process.argv[3];

//Twitter if statement works with the below var client. Without it, it's not working.
var client = new Twitter({
  consumer_key: 'FVYgOmPOsJw65PqVjwYHYF4td',
  consumer_secret: 'o6dBjqowHV09TqFo2U2bBBCm4Q0ijbXvk9QYdAsOvGHqT6wK9S',
  access_token_key: '1330407073-dCe8D9KrZgLZzwbk10wrl3k2S5wUv0BCvRKDM7L',
  access_token_secret: 'WKaMbf2QqwZcNb3G8LnoLOyTe4ike96c2HUARQYPEDmVD'
});


if (input === "my-tweets") {
	var params = {screen_name: 'NoahKing15'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
     console.log('Tweets ' + JSON.stringify(response, null, 2));
    console.log("******** " + tweets[0].text);
  }
});
	console.log("it grabbed my tweets");

}

if (input === "spotify-this-song"){
//Runs the spotify search
spotify.search({ type: 'track', query: inputTwo }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
	console.log("Artist name: " + data.tracks.items[0].album.artists[0].name); 
	console.log("Album name: " + data.tracks.items[0].album.name);
	console.log("Preview url: " + data.tracks.items[0].preview_url);
});
}

if (input === "movie-this") {
	request('http://www.omdbapi.com/?s=' + inputTwo + '&r=json' , function (error, response, body) {
  

  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('Title: ' + JSON.parse(body).Search[0].Title); 
  console.log('Year: ' + JSON.parse(body).Search[0].Year);
  console.log('Rating: ' + JSON.parse(body));

});
}

if (input === "do-what-it-says") {
	fs.readFile('random.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  

});
}



