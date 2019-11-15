# Class MailApp

![devsite-google-blue.png](devsite-google-blue-a1024ac6-13b2-4a56-b4de-9b96d84a5b18.png)

Sends email.

This service allows users to send emails with complete control over the content of the email. Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot access a user's Gmail inbox.

Changes to scripts written using GmailApp are more likely to trigger a re-authorization request from a user than MailApp scripts.

### Methods

[Untitled](./Untitled-ff50ff83-d75a-4f8c-897c-20841a4262bc.csv)

## Detailed documentation

### `getRemainingDailyQuota()`

Returns the number of remaining emails a user can send for the rest of the day.

Quotas are based on the number of email recipients. Specific quota information is available on the quota tab of the [Apps Script dashboard](https://script.google.com/dashboard).

    var emailQuotaRemaining = MailApp.getRemainingDailyQuota();Logger.log("Remaining email quota: " + emailQuotaRemaining);

### Return

`Integer` — the number of emails remaining that the script can send

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.send_mail`

### `sendEmail(message)`

Sends an email message. This variation of the method is much more flexible, allowing for many more options.

    // This code fetches the Google and YouTube logos, inlines them in an email// and sends the emailfunction inlineImage() {  var googleLogoUrl = "http://www.google.com/intl/en_com/images/srpr/logo3w.png";  var youtubeLogoUrl =        "https://developers.google.com/youtube/images/YouTube_logo_standard_white.png";  var googleLogoBlob = UrlFetchApp                         .fetch(googleLogoUrl)                         .getBlob()                         .setName("googleLogoBlob");  var youtubeLogoBlob = UrlFetchApp                          .fetch(youtubeLogoUrl)                          .getBlob()                          .setName("youtubeLogoBlob");  MailApp.sendEmail({    to: "recipient@example.com",    subject: "Logos",    htmlBody: "inline Google Logo<img src='cid:googleLogo'> images! <br>" +              "inline YouTube Logo <img src='cid:youtubeLogo'>",    inlineImages:      {        googleLogo: googleLogoBlob,        youtubeLogo: youtubeLogoBlob      }  });}

### Advanced parameters

[Untitled](./Untitled-21efdd65-3c44-45d9-a515-ab74f15dba5a.csv)

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.send_mail`

### `sendEmail(recipient, subject, body)`

Sends an email message.

    MailApp.sendEmail("recipient@example.com",                  "TPS reports",                  "Where are the TPS reports?");

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.send_mail`

### `sendEmail(recipient, subject, body, options)`

Sends an email message with optional arguments.

    // Send an email with two attachments: a file from Google Drive (as a PDF) and an HTML file.var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');var blob = Utilities.newBlob('Insert any HTML content here', 'text/html', 'my_document.html');MailApp.sendEmail('mike@example.com', 'Attachment example', 'Two files are attached.', {    name: 'Automatic Emailer Script',    attachments: [file.getAs(MimeType.PDF), blob]});

### Advanced parameters

[Untitled](./Untitled-b91c2991-418f-4257-9b36-f1fff83367bd.csv)

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.send_mail`

### `sendEmail(to, replyTo, subject, body)`

Sends an email message. This method allows a user to easily specify a Reply-To address for the sent message that can differ from the sender.

    MailApp.sendEmail("recipient@example.com",                  "replies@example.com",                  "TPS report status",                  "What is the status of those TPS reports?");

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.send_mail`

[Class MailApp | Apps Script | Google Developers](https://developers.google.com/apps-script/reference/mail/mail-app)