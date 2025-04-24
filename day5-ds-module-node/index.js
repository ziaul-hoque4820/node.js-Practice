let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    if (req.url == "/") {

        //Asynchronous File Delete Operation
        let writeFileAsync = () => {

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
        let writeFileSync = () => {

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

        writeFileSync();
    };

});

server.listen(5050);

console.log("Server Run Success");
