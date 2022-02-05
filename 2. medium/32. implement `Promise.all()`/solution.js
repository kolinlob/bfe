function all(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    const _promises = promises.map((p) => p instanceof Promise ? p : Promise.resolve(p));

    let todo = _promises.length;
    if (todo == 0) return resolve(result);
    let error = false;

    _promises.forEach((p, i) => {
      Promise.resolve(p).then((res) => {
        result[i] = res;
        todo--;

        if (error) return reject(result);
        if (todo == 0) return resolve(result);
      }, reject);
    });
  });
}
