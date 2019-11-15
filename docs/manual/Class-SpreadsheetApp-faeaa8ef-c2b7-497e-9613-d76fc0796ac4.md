# Class SpreadsheetApp

![devsite-google-blue.png](devsite-google-blue-6a97845e-27a6-40ae-98ee-0986299b74a5.png)

### Properties

[Untitled](./Untitled-58d98833-6e31-4276-b3c7-949b3b466b8d.csv)

## Detailed documentation

### `create(name)`

Creates a new spreadsheet with the given name.

    // The code below creates a new spreadsheet "Finances" and logs the URL for itvar ssNew = SpreadsheetApp.create("Finances");Logger.log(ssNew.getUrl());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — a new spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `create(name, rows, columns)`

Creates a new spreadsheet with the given name and the specified number of rows and columns.

    // The code below creates a new spreadsheet "Finances" with 50 rows and 5 columns and logs the// URL for itvar ssNew = SpreadsheetApp.create("Finances", 50, 5);Logger.log(ssNew.getUrl());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — a new spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `enableAllDataSourcesExecution()`

Enables data execution for all types of data sources.

Data execution throws an exception if the data source type is not enabled. Use this method to enable data execution for all data source types.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/bigquery.readonly`

### `enableBigQueryExecution()`

### `flush()`

Applies all pending Spreadsheet changes.

Spreadsheet operations are sometimes bundled together to improve performance, such as when doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all pending changes are made right away, for instance to show users data as a script is executing.

    // The code below changes the background color of cells A1 and B1 twenty times. You should be// able to see the updates live in the spreadsheet. If flush() is not called, the updates may// be applied live or may all be applied at once when the script completes.function colors() {  var sheet = SpreadsheetApp.getActiveSheet();  for (var i = 0; i < 20; i++) {    if ((i % 2) == 0) {      sheet.getRange('A1').setBackground('green');      sheet.getRange('B1').setBackground('red');    } else {      sheet.getRange('A1').setBackground('red');      sheet.getRange('B1').setBackground('green');    }    SpreadsheetApp.flush();  }}

### `getActive()`

Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the corresponding Spreadsheet object by calling this function.

    // The code below logs the URL for the active spreadsheet.Logger.log(SpreadsheetApp.getActive().getUrl());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — the active Spreadsheet object

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveRange()`

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

This generally means the range that a user has selected in the active sheet, but in a custom function it refers to the cell being actively recalculated.

    // The code below logs the background color for the active range.var color = SpreadsheetApp.getActiveRange().getBackgroundColor();Logger.log(color);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveRangeList()`

Returns the list of active ranges in the active sheet or `null` if there are no ranges selected. The active range containing the current highlighted cell is placed last in the list.

If there is a single range selected, this behaves as a `[getActiveRange()](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)` call.

    // Returns the list of active ranges.var rangeList = SpreadsheetApp.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the list of active ranges

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveSheet()`

Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

    // The code below logs the name of the active sheet.Logger.log(SpreadsheetApp.getActiveSheet().getName());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveSpreadsheet()`

Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the corresponding `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` object by calling this function.

    // The code below logs the URL for the active spreadsheet.Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — the active Spreadsheet object

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getCurrentCell()`

Returns the current (highlighted) cell that is selected in one of the active ranges in the active sheet or `null` if there is no current cell.

    // Returns the current highlighted cell in the one of the active ranges.var currentCell = SpreadsheetApp.getCurrentCell();

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSelection()`

Returns the current `[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` in the spreadsheet.

    var selection = SpreadsheetApp.getSelection();var currentCell = selection.getCurrentCell();

`[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` — the current selection

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getUi()`

Returns an instance of the spreadsheet's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open spreadsheet, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the spreadsheet. For more information, see the guides to [menus](https://developers.google.com/apps-script/guides/menus) and [dialogs and sidebars](https://developers.google.com/apps-script/guides/dialogs).

    // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.function onOpen(e) {  SpreadsheetApp.getUi()      .createMenu('My Menu')      .addItem('My menu item', 'myFunction')      .addSeparator()      .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')          .addItem('One sub-menu item', 'mySecondFunction')          .addItem('Another sub-menu item', 'myThirdFunction'))      .addToUi();}

`[Ui](https://developers.google.com/apps-script/reference/base/ui.html)` — an instance of this spreadsheet's user-interface environment

### `newConditionalFormatRule()`

Creates a builder for a conditional formatting rule.

    // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red// if they contain a number between 1 and 10.var sheet = SpreadsheetApp.getActive().getActiveSheet();var range = sheet.getRange('A1:B3');var rule = SpreadsheetApp.newConditionalFormatRule()    .whenNumberBetween(1, 10)    .setBackgroundColor("#FF0000")    .setRanges([range])    .build()var rules = sheet.getConditionalFormatRules();rules.push(rule);sheet.setConditionalFormatRules(rules);

`[ConditionalFormatRuleBuilder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html)` — the new builder.

### `newDataValidation()`

Creates a builder for a data validation rule.

    var cell = SpreadsheetApp.getActive().getRange('A1');var rule = SpreadsheetApp.newDataValidation()    .requireNumberBetween(1, 100)    .setAllowInvalid(false)    .setHelpText('Number must be between 1 and 100.')    .build();cell.setDataValidation(rule);

`[DataValidationBuilder](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html)` — The new builder.

### `newRichTextValue()`

Creates a builder for a Rich Text value.

    // Sets cell A1 to have the text "Hello world", with "Hello" bolded.var cell = SpreadsheetApp.getActive().getRange('A1');var bold = SpreadsheetApp.newTextStyle().setBold(true).build();var value = SpreadsheetApp.newRichTextValue()    .setText("Hello world")    .setTextStyle(0, 5, bold)    .build();cell.setRichTextValue(value);

`[RichTextValueBuilder](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder.html)` — The new builder.

### `newTextStyle()`

Creates a builder for a text style.

    // Sets range A1:B3 to have red, size 22, bolded, underlined text.var range = SpreadsheetApp.getActive().getRange('A1:B3');var style = SpreadsheetApp.newTextStyle()    .setForegroundColor("red")    .setFontSize(22)    .setBold(true)    .setUnderline(true)    .build();range.setTextStyle(style);

`[TextStyleBuilder](https://developers.google.com/apps-script/reference/spreadsheet/text-style-builder.html)` — The new builder.

### `open(file)`

Opens the spreadsheet that corresponds to the given File object.

    // Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name// of the first sheet within each spreadsheet.var files = DriveApp.searchFiles(    'starred = true and mimeType = "' + MimeType.GOOGLE_SHEETS + '"');while (files.hasNext()) {  var spreadsheet = SpreadsheetApp.open(files.next());  var sheet = spreadsheet.getSheets()[0];  Logger.log(sheet.getName());}

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `openById(id)`

Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For example, the spreadsheet ID in the URL `https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0` is "abc1234567".

    // The code below opens a spreadsheet using its ID and logs the name for it.// Note that the spreadsheet is NOT physically opened on the client side.// It is opened on the server only (for modification by the script).var ss = SpreadsheetApp.openById("abc1234567");Logger.log(ss.getName());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — the Spreadsheet object with the given id

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `openByUrl(url)`

Opens the spreadsheet with the given URL.

    // The code below opens a spreadsheet using its id and logs the name for it.// Note that the spreadsheet is NOT physically opened on the client side.// It is opened on the server only (for modification by the script).var ss = SpreadsheetApp.openByUrl(    'https://docs.google.com/spreadsheets/d/abc1234567/edit');Logger.log(ss.getName());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html)` — the Spreadsheet object with the given id

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveRange(range)`

Sets the specified range as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange())`, with the top left cell in the range as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell())`.

The spreadsheet UI displays the sheet that contains the chosen range and selects the cells defined in the chosen range.

    // The code below sets range C1:D4 in the first sheet as the active range.var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('C1:D4');SpreadsheetApp.setActiveRange(range);var selection = SpreadsheetApp.getSelection();// Current cell: C1var currentCell = selection.getCurrentCell();// Active Range: C1:D4var activeRange = selection.getActiveRange();

### `setActiveRangeList(rangeList)`

Sets the specified list of ranges as the `[active ranges](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)`. The last range in the list is set as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)`.

    // The code below sets ranges [D4, B2:C4] in the active sheet as the active ranges.var rangeList = SpreadsheetApp.getActiveSheet().getRanges(['D4', 'B2:C4']);SpreadsheetApp.setActiveRangeList(rangeList);var selection = SpreadsheetApp.getSelection();// Current cell: B2var currentCell = selection.getCurrentCell();// Active range: B2:C4var activeRange = selection.getActiveRange();// Active range list: [D4, B2:C4]var activeRangeList = selection.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the newly selected list of ranges

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSheet(sheet)`

Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    // The code below makes the 2nd sheet active in the active spreadsheet.var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet that has been made the new active sheet

### `setActiveSheet(sheet, restoreSelection)`

Sets the active sheet in a spreadsheet, with the option to restore the most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();var firstSheet = spreadsheet.getSheets()[0];var secondSheet = spreadsheet.getSheets()[1];// Set the first sheet as the active sheet and select the range D4:F4.spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();// Switch to the second sheet to do some work.spreadsheet.setActiveSheet(secondSheet);// Switch back to first sheet, and restore its selection.spreadsheet.setActiveSheet(firstSheet, true);// The selection of first sheet is restored, and it logs D4:F4var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();Logger.log(range.getA1Notation());

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSpreadsheet(newActiveSpreadsheet)`

Sets the active spreadsheet.

    // The code below makes the spreadsheet with key "1234567890" the active spreadsheetvar ss = SpreadsheetApp.openById("1234567890");SpreadsheetApp.setActiveSpreadsheet(ss);

### `setCurrentCell(cell)`

Sets the specified cell as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)`.

If the specified cell is present in an already selected range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any selected range, then the existing selection is removed and the cell becomes the current cell and the active range.

**Note:**The specified `[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` must consist of one cell, otherwise this method throws an exception.

    // The code below sets the cell B5 in the first sheet as the current cell.var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('B5');SpreadsheetApp.setCurrentCell(cell);var selection = SpreadsheetApp.getSelection();// Current cell: B5var currentCell = selection.getCurrentCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

[Class SpreadsheetApp | Apps Script | Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)