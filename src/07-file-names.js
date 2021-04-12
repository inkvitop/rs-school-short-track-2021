/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const finalArr = [];
  const leng = names.length;
  for (let index = 0; index < leng; index++) {
    let count = 1;
    let el = names[index];
    const temp = names[index];
    if (finalArr.includes(el) === false) {
      finalArr.push(el);
    } else {
      el = `${temp}(${count})`;
      for (let i = 0; i < leng; i++) {
        if (finalArr.includes(el) === true) {
          count++;
          el = `${temp}(${count})`;
        }
      }
      finalArr.push(el);
    }
  }
  return finalArr;
}

module.exports = renameFiles;
