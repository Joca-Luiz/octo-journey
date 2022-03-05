const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const tables = require('../connection/tables');

const port = process.env.PORT || 3000;
tables.createTables(() => {
    server.listen(port, () => {
        console.log("Server listening at http://localhost:"+port);
    });
});