'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SafeCastToString = exports.SafeCastToString = function SafeCastToString(property) {
  return !property ? '\0' : property;
};