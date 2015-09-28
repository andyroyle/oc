'use strict';

var express = require('express');
var _ = require('underscore');

var dependenciesResolver = require('./dependencies-resolver');
var settings = require('../../resources/settings');
var authentication = require('./authentication');

module.exports = function(input){
  var options = _.clone(input);

  if(!options.publishAuth){
    options.beforePublish = function(req, res, next){ next(); };
  } else {
    options.beforePublish = authentication[options.publishAuth.type].middleware(express);
  }

  if(!options.prefix){
    options.prefix = '/';
  }

  if(!options.tempDir){
    options.tempDir = settings.registry.defaultTempPath;
  }

  if(!!options.dependencies){
    options.dependencies = dependenciesResolver(options);
  }

  return options;
};
