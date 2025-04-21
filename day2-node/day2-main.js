/* 1. Request Response model works in node.js

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

console.log("Server Run Seccess"); */



/* 2. understanding package joson
      open tarminal & comand: npm init --y
      Adding a new command line to the script to make it easier to run node files:
      "start": "node day2-main.js" 
*/      


//   3. understanding node URL module


let http = require("http");
let URL = require("url");

let server = http.createServer((request, response) => {

    let myURL = "http://rabbil.com/blog.html?year=2020&month=july";

    let myURLObj = URL.parse(myURL, true);

    let myHostName = myURLObj.host;
    let mypathName = myURLObj.pathname;
    let mySearchName = myURLObj.search;

    response.writeHead(200, {"content-type": "text/html"})
    response.write(myHostName)
    response.end();


});

server.listen(5050);

console.log("Server Run Seccess"); 
