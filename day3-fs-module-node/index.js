
let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {

    if(req.url == "/"){

        //Asynchronous operation
        fs.readFile("home.html", (error, data) => {

            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    
});

server.listen(4040);

console.log("Server Run Success");
