"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaCylinder = exports.areaRectangle = exports.areaCircle = void 0;
var PI = 3.14159;

var areaCircle = function areaCircle(r) {
  return PI * r * r;
};

exports.areaCircle = areaCircle;

var areaRectangle = function areaRectangle(l, w) {
  return l * w;
};

exports.areaRectangle = areaRectangle;

var areaCylinder = function areaCylinder(r, l) {
  return 2 * PI * r * l;
};

exports.areaCylinder = areaCylinder;