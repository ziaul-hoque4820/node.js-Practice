let mysql = require('mysql');

let databaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
};

let con = mysql.createConnection(databaseConnectionConfig);

con.connect((error) => {
    if (error) {
        console.log("connection fail");
    }
    else {
        console.log("connection success");
        insertData(con);
    }
});


let insertData = (con) => {

    let SQLQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`, `result`) VALUES ('Ziaul Hoque','25','Ten','01708174005','Cumilla','A+')"
    
    con.query(SQLQuery, (error) => {

        if (error) {
            console.log("Data Insert fail");
        }
        else {
            console.log("Data Insert Success");
        }
    })
}