/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return new Wrapper(el);
}

class Wrapper {
  constructor(element) {
    this.element = element;
  }

  css(propertyName, value) {
    this.element.style[propertyName] = value;
    return this;
  }
}
