"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueLogger = void 0;

var _filter = require("./filter");

var uniqueLogger = function uniqueLogger() {
  console.log((0, _filter.getUnique)([1, 2, 3, 4, 5, 1, 2, 3, 4]));
};

exports.uniqueLogger = uniqueLogger;