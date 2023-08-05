"use strict";

exports.__esModule = true;
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* eslint-disable */
// const root = (isServer ? global : window) as Window;


var root = window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation


function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}