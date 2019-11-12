/**
 * Send emails to the manager
 * @param {*} id
 */
function stepOneApprovalEmail(response) {
  try {
    /* Getting the responder email address */
    var toAddress = response.step1.email.value;

    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step1.subject.request.prefix,
      suffix: CONFIG.email.step1.subject.request.suffix
    });

    var requesterEmail = response.payloads.email.value;
    var requestQuery = response.payloads.requestType.value;

    var body = "<html><body>";
    body += "<p>Dear Approver 1, </p></br>";
    body +=
      "<p>A requester " +
      requesterEmail +
      " has submitted a new <b>" +
      requestQuery +
      "</b> request.</p></br>";
    body +=
      "<p>Please review the request and click a link below to complete this approval process.</p></br>";

    body += response.payloads.bodyField;

    /* Generate a form URL, allowing the user to take a response. */
    body +=
      '<p><b><font color="#BB0000">Please click the link below to response.</p></b></br></font>';
    body += "<p>" + response.step1.formUrl.value + "</p>";

    body += "<br><p><u>Remark</u>: This is an automatic notification email. ";
    body += "<b>Please do not reply!</b></p>";

    body += "<br><br><p>Best Regards,</p>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.error("stepOneApprovalEmail() : " + error);

    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);
  }
}
