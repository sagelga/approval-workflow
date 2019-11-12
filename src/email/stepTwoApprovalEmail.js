/**
 * Sending emails to step2 responder (FMA)
 * @todo - do the same thing as the first step, but now adding the comments from the previous step and send it to FMA MDM
 * @param {*} id
 */
function stepTwoApprovalEmail(response) {
  try {
    var toAddress = response.step2.email.value;

    var subject = getSubjectField(response, {
      prefix: CONFIG.email.step2.subject.request.prefix,
      suffix: CONFIG.email.step2.subject.request.suffix
    });

    var requestQuery = response.payloads.requestType.value;
    var approver1Email = response.step1.email.value;
    var approver1Comment = response.step1.comments.value;

    var body = "<html><body>";
    body +=
      "<p>Hello Approver 2,</p></br></br><p>Approver 1 " +
      approver1Email +
      " has approved a <b>" +
      requestQuery +
      "</b> request form.</p></br></br>";
    body +=
      "<p>Please review the request form response below then complete the approval.</p></br></br>";
    body += "<p>Manager comments : " + approver1Comment;

    body += response.payloads.bodyField;

    /* Generate a form URL, allowing the user to take a response. */
    body +=
      '<p><b><font color="#BB0000">Please click the link below to response.</p></b></br></font>';
    body += "<p>" + response.step2.formUrl.value + "</p>";

    body += "<br><p><u>Remark</u>: This is an automatic notification email. ";
    body += "<b>Please do not reply!</b></p>";

    body += "<br><br><p>Best Regards,</p>";
    body += "</body></html>";

    sendEmails(toAddress, subject, body);
  } catch (error) {
    console.error("stepTwoApprovalEmail() : " + error);

    console.log("toAddress" + toAddress);
    console.log("subject" + subject);
    console.log("body" + body);

    throw new Error(error);
  }
}
