const conn = require("../connection/conn")
const { randomUUID } = require('crypto');

class Subjects {
    getSubjects(uni, res) {
        const sql = "SELECT * FROM subjects WHERE uni = ?;";
        const inserts = [uni];
        conn.query(sql, inserts, (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                res.status(200).render("subject", {subject: result});
                return;
            }
            res.status(400).render('err', {code: 400});
        });
    }

    createSubjects(title, subtitle, author, text, res) {
        const uni = randomUUID().substring(0, 9);

        const sql = "INSERT INTO subjects (uni, title, subtitle, autor, text) VALUES (?, ?, ?, ?, ?);";
        const inserts = [uni, title, subtitle, author, text];
        
        conn.query(sql, inserts, (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0) {
                res.redirect('/subjects/'+uni);
                return;
            }

            res.status(500).render('err', {code: 500});
        });
    }
}

module.exports = new Subjects();