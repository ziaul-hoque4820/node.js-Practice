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
        // insertData(con);
        // deleteDataById(con);
        updateData(con);
    }
});


let insertData = (con) => {

    let SQLQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`, `result`) VALUES ('Aminul Hoque','25','Nine','01720282887','Dhaka','A')"
    
    con.query(SQLQuery, (error) => {

        if (error) {
            console.log("Data Insert fail");
        }
        else {
            console.log("Data Insert Success");
        }
    })
}

let deleteDataById = (con) => {
    let SQLQuery = "DELETE FROM `students_list` WHERE `id` = '2' "

    con.query(SQLQuery, (error) => {

        if (error) {
            console.log("Data Delete fail");
        }
        else {
            console.log("Data Delete Success");
        }
    })
};

let updateData = (con) => {
    let SQLQuery = "UPDATE `students_list` SET  `phone`='01939074820',`city`='Chandpur' WHERE `id` = '3' "

    con.query(SQLQuery, (error) => {
        if(error){
            console.log("Data Update Fail");
        }
        else{
            console.log("Data Update Success");
        }
    })
}


