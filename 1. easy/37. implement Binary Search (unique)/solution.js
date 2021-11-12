/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (target == arr[mid]) return mid;
    if (target < arr[mid]) hi = mid - 1;
    else lo = mid + 1;
  }

  return -1;
}
