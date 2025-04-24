let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    if (req.url == "/") {

        //Asynchronous File Delete Operation
        let deletFileAsync = () => {

            fs.unlink("demo.txt", (error) => {
                if (error) {
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write("File Delete Fail");
                    res.end();
                }
                else {
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write("File Delete Success");
                    res.end();
                }
            })
        };

        //Synchronous File Delete Operation
        let deletFileSync = () => {

            let error = fs.unlinkSync("index.txt");

            if (error) {
                res.writeHead(200, { "content-type": "text/html" });
                res.write("File Delete Fail");
                res.end();
            }
            else {
                res.writeHead(200, { "content-type": "text/html" });
                res.write("File Delete Success");
                res.end();
            }
        };

        //Asynchronous File Exists Operation
        let existsFileAsync = () => {

            fs.exists("demo.txt", (result) => {
                if (result) {
                    res.end("Frle Exists");
                }
                else {
                    res.end("Frle Not Exists");
                }
            })
        };

        //Synchronous File Exists Operation
        let existsFileSync = () => {

            let result = fs.existsSync("demo.txt");

            if (result) {
                res.end("true");
            }
            else {
                res.end("false");
            }
        };

        existsFileAsync();
    };

});

server.listen(5050);

console.log("Server Run Success");
