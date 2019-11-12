/**
 * Converts millisecond (from time difference calculations) to Dd HHh MMm
 * @tutorial https://stackoverflow.com/questions/8528382/javascript-show-milliseconds-as-dayshoursmins-without-seconds
 * @param {*} t
 * @returns {String} time string from milisecond calculations
 */
function milisecToTime(t) {
  var cd = 24 * 60 * 60 * 1000,
    ch = 60 * 60 * 1000,
    d = Math.floor(t / cd),
    h = Math.floor((t - d * cd) / ch),
    m = Math.round((t - d * cd - h * ch) / 60000),
    pad = function(n) {
      return n < 10 ? "0" + n : n;
    };
  if (m === 60) {
    h++;
    m = 0;
  }
  if (h === 24) {
    d++;
    h = 0;
  }

  return "" + d + "d " + pad(h) + "h " + pad(m) + "m";
  // return [d, pad(h), pad(m)].join(':');
}
