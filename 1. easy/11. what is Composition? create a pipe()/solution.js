/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
const pipe = (funcs) => (arg) => funcs.reduce((result, fn) => fn.call(this, result), arg);

function pipe(funcs) {
  return (arg) => funcs.reduce((result, fn) => fn.call(this, result), arg);
}

function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((result, fn) => fn.call(this, result), arg);
  };
}

function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((result, fn) => {
      return fn.call(this, result);
    }, arg);
  };
}

function pipe(funcs) {
  return function (arg) {
    let result = arg;
    for (let fn of funcs)
        result = fn.call(this, result);
    return result;
  };
}
