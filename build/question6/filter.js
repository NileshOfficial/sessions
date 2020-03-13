"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnique = void 0;

var getUnique = function getUnique(arr) {
  return Array.from(new Set(arr));
};

exports.getUnique = getUnique;