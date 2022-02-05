/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target == null) throw new Error("bad target");

  let res = Object(target);

  for (let source of sources)
    source && Object.defineProperties(res, Object.getOwnPropertyDescriptors(source));

  return res;
}
