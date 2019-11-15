/**
 * Send notification about rejection to responder (step0)
 * @param {*} response
 */
function stepOneRejectEmail(response) {
  try {
    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step1.subject.decline.prefix,
      suffix: CONFIG.email.step1.subject.decline.suffix
    });

    var toAddress = response.payloads.email.value;

    var managerEmail = response.step1.email.value;
    var comment = response.step1.comments.value;

    var body = new String();
    body += "<html><body>";

    body += "<p>" + "Hello," + "</p></br>";
    body +=
      '<p>"' +
      managerEmail +
      '"' +
      "has reviewed your request submission." +
      "</p></br>";
    body += "<p>The status of your request is: <b>Rejected</b>" + "</p></br>";
    body += "<p>The reviewer comment is: " + comment + "</p></br>";

    body += response.payloads.bodyField;

    body += "<p>Best Regards,</p></br>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);
  }
}
