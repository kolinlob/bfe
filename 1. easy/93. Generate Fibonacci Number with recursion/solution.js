function fib(n) {
  let memo = new Map();

  function memoize(n, memo) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (!memo.has(n - 1)) memo.set(n - 1, memoize(n - 1, memo));
    if (!memo.has(n - 2)) memo.set(n - 2, memoize(n - 2, memo));

    return memo.get(n - 1) + memo.get(n - 2);
  }

  return memoize(n, memo);
}
