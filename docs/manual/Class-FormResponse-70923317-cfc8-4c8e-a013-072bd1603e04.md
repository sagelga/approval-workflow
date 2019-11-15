# Class FormResponse

![devsite-google-blue.png](devsite-google-blue-a7e53b81-9870-4486-a543-fdd2247e950c.png)

A response to the form as a whole. A `[FormResponse](https://developers.google.com/apps-script/reference/forms/form-response)` can be used in three ways: to access the answers submitted by a respondent (see `[getItemResponses()](https://developers.google.com/apps-script/reference/forms/form-response)`), to programmatically submit a response to the form (see `[withItemResponse(response)](https://developers.google.com/apps-script/reference/forms/form-response)` and `[submit()](https://developers.google.com/apps-script/reference/forms/form-response)`), and to generate a URL for the form which pre-fills fields using the provided answers. `[FormResponse](https://developers.google.com/apps-script/reference/forms/form-response)`s can be created or accessed from a `[Form](https://developers.google.com/apps-script/reference/forms/form.html)`.

    // Open a form by ID and log the responses to each question.var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');var formResponses = form.getResponses();for (var i = 0; i < formResponses.length; i++) {  var formResponse = formResponses[i];  var itemResponses = formResponse.getItemResponses();  for (var j = 0; j < itemResponses.length; j++) {    var itemResponse = itemResponses[j];    Logger.log('Response #%s to the question "%s" was "%s"',        (i + 1).toString(),        itemResponse.getItem().getTitle(),        itemResponse.getResponse());  }}

[Untitled](./Untitled-502d2cfc-2cbe-464a-9402-64090332d806.csv)

## Detailed documentation

### `getEditResponseUrl()`

Generates a URL that can be used to edit a response that has already been submitted, even if the `[Form.setAllowResponseEdits(enabled)](https://developers.google.com/apps-script/reference/forms/form.html#setAllowResponseEdits(Boolean))` setting is disabled. Anyone who visits the link can edit the response, although they need an account with access to the form if the `[Form.setRequireLogin(requireLogin)](https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean))` setting is enabled. If the `[Form.setCollectEmail(collect)](https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean))` setting is enabled, the form records the email address of the user who edited the response instead of the email address of the original respondent.

For a form response that the script has created but not yet submitted, this method returns `null`.

`String` — the URL to change a submitted response

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `getGradableItemResponses()`

Gets all item responses contained in a form response, in the same order that the items appear in the form. This method works similarly to `[getItemResponses()](https://developers.google.com/apps-script/reference/forms/form-response)`, but to allow for grading a missing answer, it still returns an `[ItemResponse](https://developers.google.com/apps-script/reference/forms/item-response.html)` if the corresponding `[Item](https://developers.google.com/apps-script/reference/forms/item.html)` can be graded (ie has a point value), even if there isn't an actual response. However, if the `[Item](https://developers.google.com/apps-script/reference/forms/item.html)` isn't gradable, this method excludes that item from its returned array.

`[ItemResponse[]](https://developers.google.com/apps-script/reference/forms/item-response.html)` — an array of responses to every question item within the form for which the respondent could receive a score.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `getGradableResponseForItem(item)`

Gets the item response contained in a form response for a given item. This method works similarly to `[getResponseForItem(item)](https://developers.google.com/apps-script/reference/forms/form-response)`, but to allow for grading a missing answer, it still returns an `[ItemResponse](https://developers.google.com/apps-script/reference/forms/item-response.html)` if the corresponding `[Item](https://developers.google.com/apps-script/reference/forms/item.html)` can be graded (ie has a point value), even if there isn't an actual response. However, if the `[Item](https://developers.google.com/apps-script/reference/forms/item.html)` isn't gradable, this method returns `null`.

### Parameters

`[ItemResponse](https://developers.google.com/apps-script/reference/forms/item-response.html)` — the response for a given item, or `null` if none exists and the item is ungraded

### `getId()`

Gets the ID of the form response. This method returns `null` if the form response has not been submitted.

`String` — the ID of the form response, or `null` if the form response has not been submitted

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `getItemResponses()`

Gets all item responses contained in a form response, in the same order that the items appear in the form. If the form response does not contain a response for a given `[TextItem](https://developers.google.com/apps-script/reference/forms/text-item.html)`, `[DateItem](https://developers.google.com/apps-script/reference/forms/date-item.html)`, `[TimeItem](https://developers.google.com/apps-script/reference/forms/time-item.html)`, or `[ParagraphTextItem](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html)`, the `[ItemResponse](https://developers.google.com/apps-script/reference/forms/item-response.html)` returned for that item will have an empty string as the response. If the form response omits a response for any other item type, this method excludes that item from its returned array.

`[ItemResponse[]](https://developers.google.com/apps-script/reference/forms/item-response.html)` — an array of responses to every question item within the form for which the respondent provided an answer

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `getRespondentEmail()`

Gets the email address of the person who submitted a response, if the `[Form.setCollectEmail(collect)](https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean))` setting is enabled.

For a form response that the script has created but not yet submitted, this method returns `null`.

`String` — the email address of the person who submitted this response, if available, or `null` if the script created this response but has not yet submitted it

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `getResponseForItem(item)`

Gets the item response contained in this form response for a given item.

`[ItemResponse](https://developers.google.com/apps-script/reference/forms/item-response.html)` — the response for a given item, or `null` if none exists

### `getTimestamp()`

Gets the timestamp for a form response submission.

For a form response that the script has created but not yet submitted, this method returns `null`.

`Date` — the timestamp at which this response was submitted, or `null` if the script created this response but has not yet submitted it

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `submit()`

Submits the response. Throws a scripting exception if the response has already been submitted.

`[FormResponse](https://developers.google.com/apps-script/reference/forms/form-response)` — a newly created response saved to the form's response store

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `toPrefilledUrl()`

Generates a URL for the form in which the answers are pre-filled based on the answers in this form response.

`String` — the URL for a form with pre-filled answers

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `withItemGrade(gradedResponse)`

Adds the given item response's grades to a form response. This method applies only to form responses that have already been submitted, and only affects stored grades once they are submitted. This method also only updates the item response's grades; it does not affect the actual response (since the response has already been submitted). If this method is called multiple times for the same item, only the last grade is retained. If the ItemResponse contains no grades, this method will remove grades for the item.

    // Programmatically award partial credit for a given responsevar form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');var formResponses = form.getResponses();var formItems = form.getItems();for (var i = 0; i < formResponses.length; i++) {  var formResponse = formResponses[i];  for (var j = 0; j < formItems.length; j++) {    var item = formItems[i];    var points = item.asMultipleChoiceItem().getPoints();    var itemResponse = formResponse.getGradableResponseForItem(item);    Logger.log('Award half credit for answers containing the word "Kennedy"');    var answer = itemResponse.getResponse();    if (answer != null && answer.includes('Kennedy')) {      itemResponse.setScore(points / 2);      formResponse.withItemGrades(itemResponse);    }  }}form.submitGrades(formResponses);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

### `withItemResponse(response)`

Adds the given item response to a form response. This method applies only to form responses that the script has created but not yet submitted; it cannot affect stored responses. If this method is called multiple times for the same item, only the last item response is retained.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`