/**
 * Generate hashcode from string provided.
 * This function is not fully decodable, thus provide speed to hashing.
 * @param {String} s
 */
function generateHashCode(s) {
  return s
    .split("")
    .reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0)
    .toString(34);
}
