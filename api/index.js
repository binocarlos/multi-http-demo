var http = require('http')
var os = require("os");
var fs = require('fs');
var hostname = os.hostname();
var incrementFile = process.env.DATA_FILE || '/tmp/increment.txt';

function incrementCount(done){
  fs.readFile(incrementFile, 'utf8', function(err, data){
    if(err || !data){
      data = 0
    }
    if(typeof(data)=='string'){
      data = parseInt(data)
    }
    data++
    fs.writeFile(incrementFile, data, 'utf8', function(err){
      done(err, data)
    })
  })
}

var server = http.createServer(function(req, res){
  incrementCount(function(err, data){
    res.end(hostname + ': ' + data)
  })
  
})

server.listen(80, function(){
  console.log('server listening on port: 80')
})