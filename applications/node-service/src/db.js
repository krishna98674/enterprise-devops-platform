const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "mysql",
    user: "devops",
    password: "devops123",
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
