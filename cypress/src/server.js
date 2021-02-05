const PORT=8080; 

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./cypress/src/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url === "/styles.css"){
        fs.readFile("./cypress/src/styles.css", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(html);
        });
    }

}).listen(PORT);
