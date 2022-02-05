/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  return new Promise((resolve) => {
    const _pro = promises.map((p) => p instanceof Promise ? p : Promise.resolve(p));
    const res = [];

    let todo = _pro.length;

    if (todo == 0) resolve(res);

    _pro.forEach((p, i) =>
      p
        .then((value) => (res[i] = { status: "fulfilled", value }))
        .catch((reason) => (res[i] = { status: "rejected", reason }))
        .finally(() => (--todo == 0 ? resolve(res) : null))
    );
  });
}
