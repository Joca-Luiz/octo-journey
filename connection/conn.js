const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    multipleStatements: true
});
conn.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
});

module.exports = conn;
