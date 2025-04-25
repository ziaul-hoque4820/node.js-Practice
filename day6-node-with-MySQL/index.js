let mysql = require('mysql');

let databaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password: ""
};

let con = mysql.createConnection(databaseConnectionConfig);

con.connect((error) => {
    if(error){
        console.log("connection fail");
    }
    else {
        console.log("connection success");
        
    }
});
