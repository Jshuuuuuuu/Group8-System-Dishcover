const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",      
    user: "root",
    database: "test"   
});


connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});

module.exports = connection;