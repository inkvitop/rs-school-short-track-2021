/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let arr = l;
  let finalArr = [];

  while (arr !== null) {
    finalArr.push(arr);
    arr = arr.next;
  }

  finalArr = finalArr.filter((el) => el.value !== k);
  for (let index = 0; index < finalArr.length; index++) {
    finalArr[index].next = finalArr[index + 1] || null;
  }

  return finalArr[0];
}

module.exports = removeKFromList;
