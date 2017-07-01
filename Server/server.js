const http = require("http");
const express = require("express");
const server = require("debug")("app:server");

const app = express();
const api = require("./api");
const init = require("./db");

init((err, db) => {
    if (err) {
        server("Error");
        process.exit(0);
    }

    api(app, db);

    app.listen(3000, () => {
        server("Server listening on port 3000");
    });
});