/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
  if (Array.isArray(input) || typeof input[Symbol.iterator] === "function")
    return new Observable((s) => fromArray(input, s));

  if ("length" in input)
    return new Observable((s) => fromArray(Array.from(input), s));

  if (input instanceof Promise)
    return new Observable((s) => fromPromise(input, s));

  if (input instanceof Observable)
    return new Observable((s) => input.subscribe(s));

  throw new Error("unsupported input type");

  function fromPromise(promise, subscriber) {
    promise
      .then(
        (value) => subscriber.next(value),
        (reason) => subscriber.error(reason)
      )
      .catch((error) => subscriber.error(error))
      .finally(() => subscriber.complete());
  }

  function fromArray(input, subscriber) {
    try {
      for (let item of input) subscriber.next(item);
    } catch (error) {
      subscriber.error(error);
    } finally {
      subscriber.complete();
    }
  }
}
