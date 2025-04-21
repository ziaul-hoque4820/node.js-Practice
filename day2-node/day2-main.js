let http = require("http");

let server = http.createServer((request, response) => {
    if(request.url == "/"){
        response.writeHead(200, {"content-type": "text/html"})
        response.write("<h1>This is Home Page</h1>")
        response.end();
    }
    else if(request.url == "/about"){
        response.writeHead(200, {"content-type": "text/html"})
        response.write("<h1>This is About Page</h1>")
        response.end();
    }else if(request.url == "/contact"){
        response.writeHead(200, {"content-type": "text/html"})
        response.write("<h1>This is Contact Page</h1>")
        response.end();
    }
});

server.listen(5050);

console.log("Server Run Seccess");
