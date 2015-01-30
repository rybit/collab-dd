var config = require('./config.js');
var mongojs = require('mongojs');

var db = mongojs(config.mongo.url, config.mongo.collections);

module.exports = db;
