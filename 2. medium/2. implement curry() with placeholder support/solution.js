/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    const enoughArgs =
      args.slice(0, fn.length).filter((a) => a != curry.placeholder).length >=
      fn.length;

    return enoughArgs
      ? fn.apply(this, args)
      : function (...newArgs) {
          const prev = args.map((a) =>
            a == curry.placeholder && newArgs.length ? newArgs.shift() : a
          );
          return curried(...prev, ...newArgs);
        };
  };
}

curry.placeholder = Symbol();
