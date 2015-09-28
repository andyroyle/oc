'use strict';

var strings = require('../../../resources');
var config = {};

module.exports.validate = function(publishAuth){
    config = publishAuth;
    return publishAuth.username && publishAuth.password;
};

module.exports.auth = function(username, password){
    return config.username === username && config.password === password;
};
