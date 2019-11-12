/**
 * Converts number into a character. Perfect for converting a column number into 'A1' format.
 *
 * @tutorial https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
 *
 * @param {String|Number} column - can be alphabet or number
 *
 * @returns {String} result, as English alphabet. Starts with A as 1.
 *
 * @example
 * columnToLetter(2);
 * => 'B'
 *
 * @example
 * columnToLetter('A');
 * => 'A'
 *
 */
function columnToLetter(column) {
  if (RegExp("[0-9]").test(column)) {
    var temp = "";
    var letter = "";

    while (column > 0) {
      temp = (column - 1) % 26;
      letter = String.fromCharCode(temp + 65) + letter;
      column = (column - temp - 1) / 26;
    }

    return letter;
  }
  return column;
}
