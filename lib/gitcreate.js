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

var got = require('got');

/**
 * Create a Github repository with only `username/repo`.
 * Support CLI and Promises.
 *
 * @param  {String} `repository`
 * @param  {Object} `options`
 * @param  {Function} `callback`
 */
module.exports = function githubCreateRepo(repository, options, callback) {
  var api = 'https://api.github.com';

  var parts = repository.split('/');
  var user = parts[0];
  var repo = parts[1];
  var data = {
    name: repo,
    description: options.description,
    homepage: options.homepage
  };
  var opts = {
    path: '/users/' + user,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  got(api, opts, function(err, result) {
    if (err) {
      callback(err);
      return;
    }

    if (result.body.type == 'User') {
      opts.path = '/user/repos';
    } else {
      opts.path = '/orgs/' + user + '/repos';
    }

    opts.headers.Authorization = 'token ' + options.token;
    opts.headers['Content-Length'] = JSON.stringify(data).length;

    got(api, opts, function(err, res) {
      if (err) {
        callback(err);
        return;
      }
      var returns = {
        response: res,
        visit: 'https://github.com/' + user + '/' + repo
      };
      callback(undefined, returns);
    });
  });
};
