"use strict";

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

function _templateObject() {
  var data = _taggedTemplateLiteral(["diyigecanshu", "diergecanshu", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function temp(stringArr) {
  console.log(stringArr);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.log(args);
}

var a = 1,
    b = 2;
temp(_templateObject(), a, b);