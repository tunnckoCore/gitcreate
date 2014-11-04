/**
 * gitcreate <https://github.com/tunnckoCore/gitcreate>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var superagent = require('superagent')

module.exports = function githubCreateRepo(repository, options, callback) {
  var api = 'https://api.github.com';

  var parts = repository.split('/');
  var user = parts[0];
  var repo = parts[1]
  var data = {
    name: repo,
    description: options.description,
    homepage: options.homepage
  };

  superagent
    .get(api + '/users/' + user)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .end(function(err, result){
      if (!!result.error) {
        callback(result.error);
        return;
      }
      var endpoint = '';
      
      if (result.body.type == 'User') {
        endpoint = '/user/repos'
      } else {
        endpoint = '/orgs/'+user+'/repos'
      }

      superagent
        .post(api + endpoint)
        .send(data)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', 'token ' + options.token)
        .set('Content-Length', JSON.stringify(data).length)
        .end(function(err, res){
          if (!!res.error) {
            callback(res.error);
            return;
          }
          callback(undefined, {response: res, visit: 'https://github.com/'+user+'/'+repo})
        });
    });
}
