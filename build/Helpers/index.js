'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkNullProperty = exports.checkNullProperty = function checkNullProperty(property) {
  return !property ? '\0' : property;
};
var CleanAddress = exports.CleanAddress = function CleanAddress(addressObject) {
  var CleanedInfo = {};
  Object.keys(addressObject).forEach(function (prop) {
    if (addressObject[prop]) {
      CleanedInfo[prop] = addressObject[prop];
    }
  });
  return CleanedInfo;
};