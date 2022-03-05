const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "sql725.main-hosting.eu",
    user: "u406265435_joca",
    password: "Batata123@",
    database: "u406265435_jocadedados",
    multipleStatements: true
});
conn.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
});

module.exports = conn;