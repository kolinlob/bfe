/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, cur) => [...acc, ...(Array.isArray(cur) ? flat(cur, depth - 1) : [cur])], [])
    : arr;
}

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, cur) => Array.isArray(cur)
            ? [...acc, ...flat(cur, depth - 1)]
            : [...acc, cur]
        , [])
    : arr;
}

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  let res = [];

  arr.forEach((a) =>
    Array.isArray(a) && depth
        ? res.push(...flat(a, depth - 1)) 
        : res.push(a)
  );

  return res;
}
