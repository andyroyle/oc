'use strict';

var ActiveDirectory = require('activedirectory');

module.exports.validate = function(publishAuth, cb){
    if(!publishAuth.url || !publishAuth.baseDN){
        return false;
    }

    var ad = new ActiveDirectory(config);
};
