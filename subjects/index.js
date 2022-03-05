const subjects = require("./subjects");

module.exports = app => {
    app.get('/subjects/:subject', (req, res) => {
        const { subject } = req.params;
        subjects.getSubjects(subject, res);
    });

    app.post('/subjects', (req, res) => {
        const { title, subtitle, author, text } = req.body;
        subjects.createSubjects(title, subtitle, author, text, res);
    });
}