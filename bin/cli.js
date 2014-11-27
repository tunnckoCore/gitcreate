#!/usr/bin/env node
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

var gitcreate = require('../index');
var meow = require('meow');

var cli = meow({
  pkg: '../package.json',
  help: [
    'Options',
    '  --help                Show this help',
    '  --version             Current version of package',
    '  -n | --name           User and name of the repo you want to create (as user/repo)',
    '  -t | --token          Github token to auth for api calls',
    '  -p | --promise        Handle response with promise - true/false or empty',
    '  -h | --homepage       Website that will be set for the repository',
    '  -d | --description    Description for the repo',
    '',
    'Usage',
    '  gitcreate <userRepo> <token> [promise] [homepage] [description]',
    '  gitcreate -p -n <userRepo> -t <token> -h [homepage] -d [description]',
    '',
    'Examples',
    '  gitcreate tunnckoCore/awesomeRepo githubTokenHere',
    '  gitcreate tunnckoCore/newRepo jk3hkj2h false http://google.com "some long desc"',
    '  gitcreate tunnckoCore/gitcreate -p --token "secret" -h "google.com" -d "long desc"',
    '  gitcreate -p --name tunnckoCore/gitcreate',
    '  gitcreate --homepage "www.twitter.com" -t mySecretToken -n tunnckoCore/gitcreate',
    ''
  ].join('\n')
});

var repo = cli.input[0] || cli.flags.n || cli.flags.name;
var toks = cli.input[1] || cli.flags.t || cli.flags.token;
var prom = cli.input[2] || cli.flags.p || cli.flags.promise;
var home = cli.input[3] || cli.flags.h || cli.flags.homepage;
var desc = cli.input[4] || cli.flags.d || cli.flags.description;

var opts = {
  name: repo,
  token: toks,
  homepage: home,
  description: desc,
  promise: prom
}

if (opts.prom) {
  gitcreate(opts).then(console.log).catch(console.error);
} else {
  gitcreate(opts, function(err, res) {
    if (err) {
      console.error(err)
      return;
    }
    console.log(res);
  });
}
