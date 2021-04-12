/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixDepth = matrix.length;
  const leng = matrix[0].length;
  const finalArr = new Array(matrixDepth);
  for (let index = 0; index < matrixDepth; index++) {
    finalArr[index] = new Array(leng);
    for (let k = 0; k < leng; k++) {
      finalArr[index][k] = 0;
    }
  }
  for (let i = 0; i < matrixDepth; i++) {
    for (let l = 0; l < leng; l++) {
      if (matrix[i][l] === true) {
        if (i !== 0) {
          if (finalArr[i - 1][l - 1] !== undefined) {
            finalArr[i - 1][l - 1]++;
          }
          if (finalArr[i - 1][l] !== undefined) {
            finalArr[i - 1][l]++;
          }
          if (finalArr[i - 1][l + 1] !== undefined) {
            finalArr[i - 1][l + 1]++;
          }
        }
        if (finalArr[i][l - 1] !== undefined) {
          finalArr[i][l - 1]++;
        }
        if (finalArr[i][l + 1] !== undefined) {
          finalArr[i][l + 1]++;
        }
        if (i !== matrixDepth) {
          if (finalArr[i + 1][l - 1] !== undefined) {
            finalArr[i + 1][l - 1]++;
          }
          if (finalArr[i + 1][l] !== undefined) {
            finalArr[i + 1][l]++;
          }
          if (finalArr[i + 1][l + 1] !== undefined) {
            finalArr[i + 1][l + 1]++;
          }
        }
      }
    }
  }
  return finalArr;
}

// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]);

module.exports = minesweeper;
