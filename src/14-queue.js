const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the el to the queue
 * queue.enqueue(3); // adds the el to the queue
 * queue.dequeue(); // returns the top el from queue and deletes it, returns 1
 *
 */

class Queue {
  enqueue(el) {
    const listnode = new ListNode(el);
    listnode.value = el;
    if (this.queue) {
      listnode.next = this.queue;
    }
    this.queue = listnode;
    this.length++;
  }

  dequeue() {
    let head = this.queue;
    if (this.size === 1) {
      const el = head.value;
      this.queue = null;
      return el;
    }
    while (head.next.next) head = head.next;
    const el = head.next.value;
    head.next = null;
    return el;
  }

  get size() {
    let count = 0;
    let head = this.queue;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }
}

module.exports = Queue;
