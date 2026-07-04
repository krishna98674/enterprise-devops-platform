const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "nodeuser",
    password: "nodepass123",
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
