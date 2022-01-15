/**
 * @param {integer} from
 * @param {integer} to
 */
function* range(from, to) {
  while (from <= to) yield from++;
}

/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return rng(from, to);

  function* rng(a, b) {
    while (a <= b) yield a++;
  }
}

/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return (function* (a, b) {
    while (a <= b) yield a++;
  })(from, to);
}
