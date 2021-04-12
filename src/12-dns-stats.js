/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const depth = domains.length;
  const matrix = new Array(depth);
  const finalObj = {};

  for (let index = 0; index < depth; index++) {
    matrix[index] = domains[index].split('.').reverse();
    let tempKey = '';
    for (let i = 0; i < matrix[index].length; i++) {
      tempKey += `.${matrix[index][i]}`;
      finalObj[tempKey] = 0;
    }
  }
  for (let j = 0; j < depth; j++) {
    let tempKey = '';
    for (let k = 0; k < matrix[j].length; k++) {
      tempKey += `.${matrix[j][k]}`;
      finalObj[tempKey] += 1;
    }
  }

  return finalObj;
}

module.exports = getDNSStats;
