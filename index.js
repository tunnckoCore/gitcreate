/**
 * gitcreate <https://github.com/tunnckoCore/gitcreate>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var create = require('./lib/create');

module.exports = function githubCreateRepo(repository, options, callback) {
  if (typeof repository !== 'string' && typeof repository !== 'object') {
    throw new TypeError('First argument must be object or string')
  }

  if (typeof repository === 'object') {
    callback = options
    options = {};
    options.promise = repository.promise || false
    options.token = repository.token;
    options.homepage = repository.homepage || 'http://ockjs.com'
    options.description = repository.description || 'default description'
    repository = repository.name;
  }


  if (options.promise) {
    var Promise = require('native-or-another');
    return new Promise(function resolver(resolve, reject) {
      create(repository, options, function(err, res) {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    });
  }
  
  if (typeof callback !== 'function') {
    throw new TypeError('Must have callback')
  }

  create(repository, options, callback);
}
