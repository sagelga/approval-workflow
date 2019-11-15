/**
 * Send notification about rejection to responder (step0) and manager (step1)
 * @param {*} id
 */
function stepTwoRejectEmail(response) {
  try {
    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step2.subject.decline.prefix,
      suffix: CONFIG.email.step2.subject.decline.suffix
    });

    var toAddress = new Array();
    toAddress.push(response.step1.email.value);
    toAddress.push(response.payloads.email.value);

    var approver2Commment = response.step2.comments.value;

    var body = new String();

    body += "<html><body>";

    body += "<p>" + "Hello," + "</p></br>";
    body +=
      '<p>"' + "Approver 2 has reviewed your request submission." + "</p></br>";
    body += "<p>The status of your requet is : <b>Rejected</b>" + "</p></br>";
    body += "<p>The reviewer comment is: " + approver2Commment + "</p></br>";

    body += response.payloads.bodyField;

    body += "<p>Best Regards,</p></br>";
    body += "<p>ESSTH MDM</p></br>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);
  }
}
