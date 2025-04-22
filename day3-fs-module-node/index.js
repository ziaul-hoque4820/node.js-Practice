
let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {

    if(req.url == "/"){

        //Asynchronous operation
        /*fs.readFile("home.html", (error, data) => {

            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        }); */

        
        //Synchronous operation
        let mydata = fs.readFileSync("home.html");
        res.writeHead(200, {"content-type": "text/html"});
        res.write(mydata);
        res.end();
    }
    
});

server.listen(5050);

console.log("Server Run Success");
