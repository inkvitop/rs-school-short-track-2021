/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  const finalArray = [];
  const arrayFromSort = [];
  const arrayReturn = [];
  let index = 0;
  array.forEach((element) => {
    if (element === -1) {
      finalArray.push(element);
    } else {
      finalArray.push(0);
      arrayFromSort.push(element);
    }
  });
  arrayFromSort.sort((a, b) => a - b);
  finalArray.forEach((element) => {
    if (element === -1) {
      arrayReturn.push(-1);
    } else {
      arrayReturn.push(arrayFromSort[index]);
      index++;
    }
  });
  return arrayReturn;
}

module.exports = sortByHeight;
