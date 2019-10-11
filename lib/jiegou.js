"use strict";

var f = function f() {
  console.log("惰性求值开始");
  return {
    a: 1
  };
};

var _ref = [],
    _ref$ = _ref[0],
    x = _ref$ === void 0 ? f() : _ref$;
console.log("a");
console.log(x);