const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "proxy.env-7247295.ktm.yetiappcloud.com",
    port: 3306,
    user: "user-1851319",
    password: "u4nw9CCiN1maDOyOecd7",
    database: "company",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
// Test database connection
pool.getConnection((err, connection) => {

    if (err) {
        console.error("Database connection failed:");
        console.error(err);
        return;
    }

    console.log("✅ MySQL Pool Connected");

    connection.release();

});

module.exports = pool;
