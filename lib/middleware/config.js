var jwt = require('jsonwebtoken');
var logger = require("../../utils/logger");
var configFile = require("../../config/config");

function config(req, res, next) {
        req.secret = configFile.secret;
        next();
}

module.exports = config;