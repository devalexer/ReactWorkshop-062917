const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI = "mongodb://" + process.env.name + ":" + process.env.password + "@ds143362.mlab.com:43362/todos";

module.exports = function(callback) {
    MongoClient.connect(URI, callback);
};