"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaLogger = void 0;

var _areaCalculators = require("./areaCalculators");

var areaLogger = function areaLogger() {
  console.log("Area of circle with radius 2: ".concat((0, _areaCalculators.areaCircle)(2)));
  console.log("Area of rectangle with l: 4, w: 3 ".concat((0, _areaCalculators.areaRectangle)(4, 3)));
  console.log("Area of cylinder with radius 2, height: 5: ".concat((0, _areaCalculators.areaCylinder)(2, 5)));
};

exports.areaLogger = areaLogger;