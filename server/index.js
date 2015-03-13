var http = require('http')
var concat = require('concat-stream')
var hyperquest = require('hyperquest')

var serverIP = process.env.API_IP || '10.255.0.10';//process.env.API_IP;
var serverPort = process.env.API_PORT || 80;

var server = http.createServer(function(req, res){
  var req = hyperquest('http://' + serverIP + ':' + serverPort).pipe(concat(function(body){
    body = body.toString()

    res.end(body + "\n")
  }))

  req.on('error', function(err){
    res.statusCode = 500
    res.end(err)
  })
})

server.listen(80, function(){
  console.log('server listening on port: 80')
})