var http = require("http");

var server = http.createServer((request, response) => {
    response.end("Hello World")
});

server.listen(5050);

console.log("Server Run Success");