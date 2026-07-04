const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "node25690-env-1224360.ktm.yetiappcloud.com",
    port: 3306,
    user: "root",
    password: "DLYaes48532",
    database: "company",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:");
        console.error(err);
        return;
    }

    console.log("✅ MySQL Pool Connected");
    connection.release();
});

module.exports = pool.promise();
