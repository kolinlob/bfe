/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timeout = null;

  return function (...args) {
    let invoked = false;

    if (timeout == null && option.leading) {
      func.apply(this, args);
      invoked = true;
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (option.trailing && invoked == false)
        func.apply(this, args);

      timeout = null;
    }, wait);
  };
}
