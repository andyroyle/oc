'use strict';

var ActiveDirectory = require('activedirectory');
var ad;

module.exports.validate = function(publishAuth){
    if(!publishAuth.url || !publishAuth.baseDN){
        return false;
    }

    ad = new ActiveDirectory(publishAuth);
    return true;
};

module.exports.middleware = function(express){
    return express.basicAuth(function(username, password, callback){
        return ad.authenticate(username, password, callback);
    });
};
