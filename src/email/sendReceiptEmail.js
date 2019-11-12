/**
 * Send copy of the value inside of each response
 * @param {Response} response
 */
function sendRecieptEmail(response) {
  try {
    /* Getting the responder email address */
    var toAddress = response.payloads.email.value;

    /* Getting the subject line and some others */
    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step0.subject.request.prefix,
      suffix: CONFIG.email.step0.subject.request.suffix
    });

    var managerEmail = response.step1.email.value;

    var body = "<html><body>";
    body += "<p>Hello,</p>";
    body +=
      "<p>Thanks for submitting your request. The request has been sent to " +
      managerEmail +
      " for approval.</p></br>";
    body +=
      "<p>We will start working on it and we will reach out to you when the status has been changed.</p></br>";
    body += "</br><p>This is what you have sent us :</p></br>";

    body += response.payloads.bodyField;

    body += "<p>This is an automatic notification email. ";
    body += "<b>Please do not reply!</b></p></br>";
    body += "If you have any question or issue, please contact</br>";

    body += "<br><br><p>Best Regards,</p>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.error("sendRecieptEmail() : " + error);

    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);
  }
}
