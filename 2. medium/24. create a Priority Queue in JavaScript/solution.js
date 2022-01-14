class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare
   */
  constructor(compare) {
    this.compare = compare;
    this.heap = [];
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.heap.length;
  }

  /**
   * returns the head element
   */
  peek() {
    return this.heap[0];
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.heap.push(element);
    this.swim(this.heap.length - 1);
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    this.swap(0, this.heap.length - 1);
    let top = this.heap.pop();
    this.sink(0);
    return top;
  }

  /* private */
  swim(i) {
    while (i > 0 && this.less(i >> 1, i)) {
      this.swap(i >> 1, i);
      i >>= 1;
    }
  }

  /* private */
  sink(i) {
    while (2 * i <= this.heap.length) {
      let j = 2 * i;
      if (j < this.heap.length && this.less(j, j + 1)) j++;
      if (!this.less(i, j)) break;
      this.swap(i, j);
      i = j;
    }
  }

  /* private */
  less(p, q) {
    return this.compare(this.heap[p], this.heap[q]) > 0;
  }

  /* private */
  swap(p, q) {
    [this.heap[p], this.heap[q]] = [this.heap[q], this.heap[p]];
  }
}
