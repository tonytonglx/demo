var http = require("http"); 
http.createServer(function(request, response) { 
response.writeHead(200, {"Content-Type": "text/plain"}); 
response.write("hello world"); 
response.end(); 
}).listen(8899); 
console.log("nodejs start listen 8899 port!");