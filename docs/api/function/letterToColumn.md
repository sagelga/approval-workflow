/**
 * Converts alphabet to column number
 * @param {*} letter
 */
function letterToColumn(letter) {
  //  Code source : https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
  var column = 0;
  var length = letter.length;

  for (var i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }

  return column;
}
