// Brings in frameworks that we need
const express = require('express');
var error = require("util");
var path = require("path");
const app = express();

// Sends index.html when user try to access website
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// allows the public directory to be accessed, includes all files
app.use(express.static(__dirname + '/public'));

// Sets to listen to port 3000
const port = 3000;
var trys = 5;

// Trys to assign the listening port to the const port, if fails will try 5 times and then exit with error
while(trys > 0) {
    try {
        app.listen(port);
        break;
    } catch (exception) {
        trys--;
        console.log('Port assignment failed');
        if(trys === 0){
          process.exit(222);
        }
    }
}

// States where the app is listening
console.log("started on %i...", port);