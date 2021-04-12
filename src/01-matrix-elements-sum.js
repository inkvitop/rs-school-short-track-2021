/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let checker = '';
  let summ = 0;
  const leng = matrix[0].length;
  const matrixDepth = matrix.length;
  for (let index = 0; index < leng; index++) {
    checker += index;
  }
  checker = checker.split('');

  for (let index = 0; index < matrixDepth; index++) {
    for (let i = 0; i < leng; i++) {
      if (matrix[index][i] === 0) {
        checker.splice(i, 1, 'z');
      }

      if (checker[i] !== 'z') {
        summ += matrix[index][i];
      }
    }
  }
  return summ;
}

module.exports = getMatrixElementsSum;
