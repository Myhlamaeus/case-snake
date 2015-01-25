case-snake [![Code Climate](https://codeclimate.com/github/ileri/case-snake/badges/gpa.svg)](https://codeclimate.com/github/ileri/case-snake) [![Build Status](https://travis-ci.org/ileri/case-snake.svg?branch=master)](https://travis-ci.org/ileri/case-snake)
==============
> Parse and stringify strings delimited by an underscore

Install
--------------
```
$ npm install --save case-snake
```

Usage
--------------
```js
var caseSnake = require("case-snake");

// parse
caseSnake.parse("this_is_an_example"); // ["this", "is", "an", "example"]

// stringify
caseSnake.stringify(["this", "is", "an", "example"]); // "this_is_an_example"

// check
caseSnake.is("this_is_an_example"); // true
caseSnake.is("this-is-an-example"); // false
caseSnake.is("thisIsAnExample"); // false
caseSnake.is("this"); // false
```
