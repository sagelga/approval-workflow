/**
 * Generate a mail subject field from the response,
 * using the prefix and suffix specified in the args parameter.
 * @param {Response} response
 * @param {Object} args
 * @param {String} args.prefix
 * @param {String} args.suffix
 *
 * @returns {String} email subject
 */
function getSubjectField(response, args) {
  try {
    var id = response.payloads.id.value;
    var requestQuery = response.payloads.requestType.value;

    var subject = args.prefix + id + " - " + requestQuery + args.suffix;

    return subject;
  } catch (error) {
    console.error("getSubjectField() : " + error);
  }
}
