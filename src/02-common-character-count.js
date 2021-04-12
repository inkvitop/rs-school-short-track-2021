/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const first = s1;
  const firstArr = first.split('');
  const second = s2;
  const secondArr = second.split('');
  let match = 0;
  for (let i = 0; i < firstArr.length; i++) {
    for (let index = 0; index < secondArr.length; index++) {
      if (firstArr[i] === secondArr[index] && firstArr[i] !== '') {
        firstArr.splice(i, 1);
        secondArr.splice(index, 1);
        match++;
        i = -1;
      }
    }
  }
  return match;
}

module.exports = getCommonCharacterCount;
