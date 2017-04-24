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
    console.log(tweets);
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





//Grabbing user input for search
// inquirer.prompt([

// {
// 	type: "list",
// 	message: "What would you like to do?",
// 	choices: ["My tweets", "Spotify this song", "Movie this", "Do what it says"],
// 	name: "first"
// },

// {
// 	type: "input",
// 	message: "Type in song name",
// 	name: "spotify"
// },

// {
// 	type: "confirm",
// 	message: "Are you sure?",
// 	name: "confirm",
// 	default: true
// }

// 	]).then(function(user){

// 	});




