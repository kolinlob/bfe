/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) =>
    promises.forEach((p) => Promise.resolve(p).then(resolve).catch(reject))
  );
}
