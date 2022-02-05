/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let err = 0;

    promises.forEach((p, i) => {
      p.then(
        (value) => resolve(value),
        (reason) => {
          err++;
          errors[i] = reason;

          if (err == promises.length)
            reject(new AggregateError("No promise resolved", errors));
        }
      );
    });
  });
}
