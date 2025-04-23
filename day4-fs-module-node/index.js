let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    if (req.url == "/") {

        //Synchronous WriteFile operation
        let writeFileSync = () => {
            let error = fs.writeFileSync("demo.txt", "Welcome to File Sync");

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
        };

        // Aynchronous Rename File Operation
        let reNameFileAync = () => {

            fs.rename('demoNew.txt', "demo.txt", (error) => {

                if(error){
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write("File Rename Fail");
                    res.end();
                }
                else{
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write("File Rename Success");
                    res.end();
                }
            })
        };

        // Synchronous Rename File Operation
        let reNameFileSync = () => {

            let error = fs.renameSync('demo.txt', 'demoNew.txt');

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
        };

        reNameFileSync();

    };

});

server.listen(5050);

console.log("Server Run Success");
