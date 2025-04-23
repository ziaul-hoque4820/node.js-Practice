let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    if (req.url == "/") {

        //Synchronous WriteFile operation
        let writeFileSync = () => {
            let error = fs.writeFileSync("demoSync.txt", "Welcome to File Sync");

            if (error) {
                res.writeHead(200, { "content-type": "text/html" });
                res.write("File Write Fail");
                res.end();
            }
            else {
                res.writeHead(200, { "content-type": "text/html" });
                res.write("File Write Success");
                res.end();
            }
        }

        writeFileSync();

    }

});

server.listen(5050);

console.log("Server Run Success");
