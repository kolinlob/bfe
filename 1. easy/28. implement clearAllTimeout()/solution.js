/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  let id = setTimeout(() => {}, 0);
  while (id) clearTimeout(id--);
}
