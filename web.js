var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send(fs.readFileSync('index.html',function(err,data){if(err) throw err; console.log(data);});
   response.send(fs.readFileSync("index.html","utf8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
