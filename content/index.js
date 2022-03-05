const conn = require("../connection/conn");
const subjects = require("../subjects/subjects");
const contents = require("./contents");

module.exports = app => {
    app.get('/', (req, res) => {
        contents.getContents(res);
    });

    app.post('/', (req, res) => {
        const { title, text } = req.body;
        contents.createContents(title, text, res);
    });
}