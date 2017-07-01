const express = require("express");
const todos = require("debug")("app:api");
const api = express.Router();


module.exports = function(app, db) {
    api.use((req, res, next) => {
        todos('${req.method}');
        next();
    });

    api.get("/", (req, res) => {
        db.collection("todos").find({}).toArray((err, todos) => {
            res.json(todos); 
        });
    });

    app.use("/api", api);

    return app;
};