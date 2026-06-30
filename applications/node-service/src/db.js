const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "mysql",
    user: "devops",
    password: "devops123",
    database: "company"
});


connection.connect((err)=>{

    if(err){
        console.log("Database connection failed");
        console.log(err);

        return;
    }

    console.log("MySQL connected");

});


module.exports = connection;
