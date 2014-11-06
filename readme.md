# gitcreate [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url] [![Coveralls][coveralls-shields]][coveralls-url]
> Open NPM package/module homepage url from NPM registry.

## Shortcuts
- [Install](#install-)
- [Usage](#usage)
- [Tests](#tests)
- [API docs](#api)
- [Command-line](#cli)
- [Related projects](#related)
- [Authors & Contributors](#authors--contributors)
- [License](./license.md)
- [History](./history.md)


## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install gitcreate -g
$ gitcreate --help
```

## Usage
> You can also see [bin/cli.js](./bin/cli.js), [tests](./test/test.js) for more example usages

**async promise example 1**
```js
var gitcreate = require('gitcreate');
var options = {
  token: 'my super secret token',
  name: 'username/reponame',
  promise: true
}
gitcreate(options)
  .then(console.log)
  .catch(console.error)
```

**async callback example**
```js
var gitcreate = require('gitcreate');
var options = {
  name: 'username/reponame',
  token: 'my super secret token',
  homepage: 'http://windowsucks.com',
  description: 'some non-default description',
  promise: false
}
gitcreate(options, function(err, res) {
  if (err) {
    console.error(err)
    return;
  }
  //=> res.response = request response object
  //=> res.visit = final url for the repo
  console.log(res.visit);
})
```

**async promise example 2**
```js
var gitcreate = require('gitcreate');
var options = {
  token: 'my super secret token',
  description: 'some non-default description',
  promise: true
}
gitcreate('username/reponame', options)
  .then(console.log)
  .catch(console.error)
```


## Tests
> You can also use `make test`

```
$ npm test
```


## API

#### gitcreate(repo, [options], [callback])
- `repo` **{String|Object}** If `repo` is string, must provide `options`
- `options` **{Object|Fn}** Options can be callback, if repo is object and `.promise: false`
  - `name` **{String}** User and name of the repo you want to create (as user/repo)
  - `token` **{String}** Github token to auth for api calls
  - `promise` **{Boolean}** Handle response with promise - true/false or empty
  - `homepage` **{String}** Website that will be set for the repository
  - `description` **{String}** Description for the repo
- `callback` **{Fn}** Node-style callback, same as always


## CLI
```
$ gitcreate --help
```

### Flags
> Flags can be used in any order.

- `--help`
- `--version`
- `-n`|`--name`|`1st arg` **{String}** User and name of the repo you want to create (as user/repo)
- `-t`|`--token`|`2nd arg` **{String}** Github token to auth for api calls
- `-p`|`--promise`|`3rd arg` **{Boolean}** Handle response with promise - true/false or empty
- `-h`|`--homepage`|`4th arg` **{String}** website that will be set for the repository
- `-d`|`--description`|`5th arg` **{String}** description for the repo

**Example usage**
```
$ gitcreate tunnckoCore/awesomeRepo githubTokenHere
$ gitcreate tunnckoCore/newRepo ghToken false google.com "some long desc"
$ gitcreate tunnckoCore/gitcreate -p --token "secret" -d "long desc"
$ gitcreate -p --name tunnckoCore/gitcreate
$ gitcreate --homepage "www.twitter.com" -t mySecretToken -n tunnckoCore/gitcreate
```


## Authors & Contributors

**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][author-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/gitcreate/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[downloads-img]: http://img.shields.io/npm/dm/gitcreate.svg
[npm-required-version-img]: http://img.shields.io/badge/npm-%3E=%201.4.28-blue.svg
[node-required-version-img]: https://img.shields.io/node/v/gitcreate.svg
[node-required-version-url]: http://nodejs.org/download/

[npmjs-url]: http://npm.im/gitcreate
[npmjs-fury]: https://badge.fury.io/js/gitcreate.svg
[npmjs-shields]: https://img.shields.io/npm/v/gitcreate.svg
[npmjs-install]: https://nodei.co/npm/gitcreate.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gitcreate?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/gitcreate.svg

[license-url]: https://github.com/tunnckoCore/gitcreate/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gitcreate
[travis-img]: https://travis-ci.org/tunnckoCore/gitcreate.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/gitcreate
[depstat-img]: https://david-dm.org/tunnckoCore/gitcreate.svg

[ferver-img]: http://img.shields.io/badge/using-ferver-585858.svg
[ferver-url]: https://github.com/jonathanong/ferver

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
[author-more]: http://j.mp/1stW47C

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
