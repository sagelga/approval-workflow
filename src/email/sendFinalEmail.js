/**
 * Sending notify emails to step3 (MDM)
 */
function sendFinalEmail(response) {
  try {
    var toAddress = response.step3.email.value;

    /* Getting the subject line and some others */
    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step3.subject.request.prefix,
      suffix: CONFIG.email.step3.subject.request.suffix
    });

    var step1Comment = response.step1.comments.value;
    var step2Comment = response.step2.comments.value;

    var body = "<html><body>";

    body += "<p>Hello, </p></br>";
    body += "<p>The status of the request is: <b>Approved</b>.</p>";
    body += "<p>" + "Approver 1 comment is: " + step1Comment + "</p>";
    body += "<p>" + "Approver 2 comment is: " + step2Comment + "</p>";

    body += response.payloads.bodyField;

    body += "<br><br><p>Best Regards,</p>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.error("sendFinalEmail() : " + error);

    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);

    throw new Error(error);
  }
}
