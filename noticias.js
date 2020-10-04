var http = require('http');


var server = http.createServer(function(req, res){
    console.log('servidor rodando');
}).listen(3000);