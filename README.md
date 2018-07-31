Reproduce with `npm install && npm test`.

Yields:
```sh
$ npm test

> @ test /Users/swilson/code/ava-test
> set -x; node -r esm src/index.mjs ; node src/index.js

+ node -r esm src/index.mjs
file:///Users/swilson/code/ava-test/src/index.mjs:1
SyntaxError: Missing export name 'add' in ES module: file:///Users/swilson/code/ava-test/src/math.js
+ node src/index.js
[Function: add]
```
