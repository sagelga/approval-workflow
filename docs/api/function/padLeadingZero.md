/**
 * Add a leading zeros to the string provided in a specific length (provided via `padLength`)
 * @param {*} text
 * @param {*} padLength
 * @returns {String} : padded text
 */
function padLeadingZero(text, padLength) {
  text = text + "";

  while (text.length % padLength) {
    text = "0" + text;
  }

  return text;
}
