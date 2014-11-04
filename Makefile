install:
	npm install

lint:
	$(MAKE) install
	jshint ./**/*.js

test:
	$(MAKE) lint
	@NODE_ENV=test mocha

test-cov:
	$(MAKE) test
	@NODE_ENV=test istanbul cover node_modules/mocha/bin/_mocha

test-travis:
	$(MAKE) test
	@NODE_ENV=test istanbul cover node_modules/mocha/bin/_mocha --report lcovonly

.PHONY: test lint
