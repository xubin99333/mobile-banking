var lockCount = 0;
export function lockClick(lock) {
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