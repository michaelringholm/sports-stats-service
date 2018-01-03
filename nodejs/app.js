var express = require('express');
var app = express();
var fs = require("fs");
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/listUsers', function (req, res) {
   //fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //    console.log( data );
   //    res.end( data );
   //});
});

app.get('/', function(req, res) {
	res.end('{"description":"sports-service 1.0"}');
});

app.get('/football/uk/pl', function(req, res) {
        res.end('{"homeTeam":"Manchester United", "awayTeam":"Liverpool", "matchStartTime":"06.02.2018 15:00", "status":"not started"}');
});

app.put('/football/uk/pl', function(req, res) {
	console.log("Adding new match to schedule...");
	console.log("Got " + JSON.stringify(req.body));
        res.end('{"status":"match added!"}');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
