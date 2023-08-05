"use strict";

exports.__esModule = true;
exports.lockClick = lockClick;
var lockCount = 0;

function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('goose-toast--unclickable');
    }

    lockCount++;
  } else {
    lockCount--;

    if (!lockCount) {
      document.body.classList.remove('goose-toast--unclickable');
    }
  }
}