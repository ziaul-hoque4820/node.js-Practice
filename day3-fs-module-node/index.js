
let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {

    if (req.url == "/") {

        //Asynchronous readFile operation
        function readFileAsync() {
            fs.readFile("home.html", (error, data) => {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(data);
                res.end();
            });
        };



        //Synchronous readFile operation
        function readFileSync() {
            let mydata = fs.readFileSync("home.html");
            res.writeHead(200, { "content-type": "text/html" });
            res.write(mydata);
            res.end();
        };



        //Asynchronous WriteFile operation
        function writeFileAsync () {
            fs.writeFile("demo.txt", "Wellcome to Node js practice", (error) => {

                if (error) {
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write('File Write Fail');
                    res.end();
                }
                else {
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write("File Write Success");
                    res.end();
                }
            });
        }

        writeFileAsync();
        
    }

});

server.listen(5050);

console.log("Server Run Success");
