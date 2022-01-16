/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let timer = null;
  let stashedArgs = null;

  return function (...args) {
    if (timer) stashedArgs = args;
    else {
      func.apply(this, args);

      timer = setTimeout(() => {
        stashedArgs && func.apply(this, stashedArgs);
        timer = null;
        stashedArgs = null;
      }, wait);
    }
  };
}
