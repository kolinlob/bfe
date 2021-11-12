/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  let [major1, minor1, patch1] = v1.split(".").map(Number);
  let [major2, minor2, patch2] = v2.split(".").map(Number);

  if (major1 > major2) return 1;
  if (major1 < major2) return -1;
  if (minor1 > minor2) return 1;
  if (minor1 < minor2) return -1;
  if (patch1 > patch2) return 1;
  if (patch1 < patch2) return -1;
  return 0;
}
