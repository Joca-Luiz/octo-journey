const conn = require('../connection/conn');

class Tables {
    createTables(cb) {
        const sql = "CREATE TABLE IF NOT EXISTS contents ( id int(9) NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(50) NOT NULL, text varchar(1000) NOT NULL ); CREATE TABLE IF NOT EXISTS subjects ( id int(9) NOT NULL PRIMARY KEY AUTO_INCREMENT, uni varchar(9) NOT NULL, title varchar(100) NOT NULL, subtitle varchar(200), autor varchar(50) NOT NULL, text text NOT NULL);";
        conn.query(sql, [], (err, result) => {
            if (err) throw err;

            if (result[0].warningStatus == 1 || result[1].warningStatus == 1) {
                console.log("Tabelas atualizadas com sucesso!");
            }
            
            cb();
        });
    }
}

module.exports = new Tables();