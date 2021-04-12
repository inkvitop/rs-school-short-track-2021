/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let finalStr = '';
  const newRedStr = str.replace(/[^\w\s]|(.)(?=\1)/gi, '');
  const redArr = newRedStr.split('');

  redArr.forEach((element) => {
    let count = 0;
    let indexStart = 0;
    let gap = 0;

    for (let i = 0; i < str.length; i++) {
      if (element === str[i] && gap === 0) {
        count++;
        indexStart = 1;
      } if (indexStart === 1 && element !== str[i]) {
        gap = 1;
      }
    }
    if (count <= 1) {
      finalStr += element;
    } else {
      finalStr += count + element;
    }
  });

  return finalStr;
}

module.exports = encodeLine;
