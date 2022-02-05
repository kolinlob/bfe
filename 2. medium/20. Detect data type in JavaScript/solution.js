/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const name = Object.prototype.toString
    .call(data)
    .split(/\[object (.*)\]/)
    .join("")
    .toLowerCase();

  return name == "filereader" ? "object" : name;
}
