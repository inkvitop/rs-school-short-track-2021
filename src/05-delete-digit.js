/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = String(n);
  const nStrArr = nStr.split('');
  const minNumber = String(Math.min.apply(null, nStrArr));

  for (let index = 0; index < nStrArr.length; index++) {
    if (nStrArr[index] === minNumber) {
      nStrArr.splice(index, 1);
    }
  }

  const finalResult = Number(nStrArr.join(''));
  return finalResult;
}

module.exports = deleteDigit;
