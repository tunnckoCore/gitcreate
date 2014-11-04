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

var create = require('../index');
var meow = require('meow');

var cli = meow({
  pkg: '../package.json',
  help: [
    'Options',
    '  --help                show this help',
    '  --version             current version of package',
    '  -n | --name           username/reponame - tunnckoCore/myNewRepo',
    '  -t | --token          github token for auth',
    '  -p | --promise        handle response with promise (boolean)',
    '  -h | --homepage       homepage of repository',
    '  -d | --description    set description for the repo',
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
})

var name = cli.input[0] || cli.n || cli.name;
var toks = cli.input[1] || cli.t || cli.token;
var prom = cli.input[2] || cli.p || cli.promise;
var home = cli.input[3] || cli.h || cli.homepage;
var desc = cli.input[4] || cli.d || cli.description;

var opts = {
  name: name,
  token: toks,
  homepage: home,
  description: desc,
  promise: prom
}

if (prom) {
  create(opts).then(console.log).catch(console.error)
  return;
}

create(opts, function(err, res) {
  if (err) {
    console.error(err)
    return;
  }
  console.log(res)
})

/**
 * @todo  tests
 * @todo  readme
 * @todo  travis
 * @todo  makefile
 * @pack  package.json
 * @todo  history
 */
