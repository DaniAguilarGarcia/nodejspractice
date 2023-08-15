//http module provides methods to transfer data over HTTP. 

let http = require('http')
http.createServer(function (req, res){
    res.write('hello from server');
    res.end();
}).listen(6000)