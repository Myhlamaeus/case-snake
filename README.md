# case-snake [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Parse and stringify strings delimited by an underscore

## Installation

```sh
$ npm install --save case-snake
```

## Usage

```js
const caseSnake = require("case-snake");

// Parse
caseSnake.parse("this_is_an_example"); // ['this', 'is', 'an', 'example']

// Stringify
caseSnake.stringify(["this", "is", "an", "example"]); // 'this_is_an_example'

// Check
caseSnake.is("this_is_an_example"); // True
caseSnake.is("this-is-an-example"); // False
caseSnake.is("thisIsAnExample"); // False
caseSnake.is("this"); // False
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/case-snake.svg
[npm-url]: https://npmjs.org/package/case-snake
[travis-image]: https://travis-ci.org/Myhlamaeus/case-snake.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/case-snake
[daviddm-image]: https://david-dm.org/Myhlamaeus/case-snake.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/case-snake
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/case-snake/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/case-snake
