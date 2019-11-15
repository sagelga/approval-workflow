# Class GmailApp 

[https://developers.google.com/apps-script/reference/gmail/gmail-app#](https://developers.google.com/apps-script/reference/gmail/gmail-app#)

![devsite-google-blue.png](devsite-google-blue-21132a5f-77a0-466f-b28b-3c9e4e3ec58f.png)

Provides access to Gmail threads, messages, and labels.

### Methods

## Detailed documentation

### `createDraft(recipient, subject, body)`

Creates a draft email message. The size of the email (including headers) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

    // The code below creates a draft email with the current date and time.var now = new Date();GmailApp.createDraft("mike@example.com", "current time", "The time is: " + now.toString());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

### `createDraft(recipient, subject, body, options)`

Creates a draft email message with optional arguments. The email can contain plain text or an HTML body. The size of the email (including headers, but excluding attachments) is [quota limited](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

    // Create a draft email with a file from Google Drive attached as a PDF.var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');GmailApp.createDraft('mike@example.com', 'Attachment example', 'Please see attached file.', {    attachments: [file.getAs(MimeType.PDF)],    name: 'Automatic Emailer Script'});

### Advanced parameters

[Untitled](./Untitled-19995c49-adf7-43f7-afd9-44e1f76b93dc.csv)

`[GmailDraft](https://developers.google.com/apps-script/reference/gmail/gmail-draft.html)` — the newly created GmailDraft

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`