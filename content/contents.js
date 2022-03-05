const conn = require("../connection/conn");

class Contents {
    getContents(res) {
        const sql = "SELECT * FROM contents; SELECT uni, title, autor FROM subjects;";
        conn.query(sql, [], (err, results) => {
            if (err) throw err;
            res.status(200).render("", {
                contents: results[0],
                subjects: results[1]
            });
        });
    }

    createContents(title, text, res) {
        const sql = "INSERT INTO contents (title, text) VALUES (?, ?);";
        const inserts = [title, text];
        conn.query(sql, inserts, (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0) {
                res.redirect('/')
                return;
            }

            res.status(500).render('err', {code: 500});
        });
    }
}

module.exports = new Contents();