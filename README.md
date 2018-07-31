Reproduce with `npm install && npm test`.

Yields:
```sh
$ npm test

> @ test /Users/swilson/code/ava-test
> ava



  1 uncaught exception

  Uncaught exception in test.mjs


  file:///Users/swilson/code/ava-test/test.mjs:5
  interface Foo {
  ^

  SyntaxError: The keyword 'interface' is reserved

npm ERR! Test failed.  See above for more details.
```
