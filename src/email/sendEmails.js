/**
 * Sending emails using Google Apps Script
 * @requires OAuth (requested by Google when you first run)
 *
 * @param {String|Array|CSV} toAddress
 * @param {String} subject
 * @param {String} body - HTML-based body
 */
function sendEmails(toAddress, subject, body) {
  try {
    if (Array.isArray(toAddress)) {
      toAddress = arrayToComma(toAddress);
    }

    // toAddress = toAddress.toString().toLowerCase().trim().replace(/(\r\n\t|\n|\r\t)/gm, "");

    if (CONFIG.testerMode) {
      sendRealMail(
        CONFIG.admin_email_address,
        subject,
        "Test Mode is on. This email supposed to send to : " + toAddress + body
      );
    } else {
      sendRealMail(toAddress, subject, body);
    }
  } catch (error) {
    console.error("sendEmails() : " + error);
    console.log(toAddress);
    console.log(subject);
    console.log(body);
  }

  function sendRealMail(toAddress, subject, body) {
    MailApp.sendEmail({
      to: toAddress,
      subject: subject,
      htmlBody: body
    });
  }
}
