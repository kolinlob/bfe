/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let id = null;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => func(args), wait);
  };
}
