# Class Spreadsheet

![devsite-google-blue.png](devsite-google-blue-cbf20d57-a64e-4c2b-83c2-edc0e329febf.png)

Access and modify Google Sheets files. Common operations are adding new sheets and adding collaborators.

### Methods

[Untitled](./Untitled-03f8d593-2c2b-4f42-85b9-e95d7140aec4.csv)

### `addDeveloperMetadata(key)`

Adds developer metadata with the specified key to the top-level spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, visibility)`

Adds developer metadata with the specified key and visibility to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, value)`

Adds developer metadata with the specified key and value to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, value, visibility)`

Adds developer metadata with the specified key, value, and visibility to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditor(emailAddress)`

Adds the given user to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditor(user)`

Adds the given user to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditors(emailAddresses)`

Adds the given array of users to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addMenu(name, subMenus)`

Creates a new menu in the Spreadsheet UI.

Each menu entry runs a user-defined function. Usually, you want to call it from the `onOpen()` function so that the menu is automatically created when the spreadsheet is loaded.

    // The onOpen function is executed automatically every time a Spreadsheet is loadedfunction onOpen() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  var menuEntries = [];  // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is  // executed.  menuEntries.push({name: "Menu Entry 1", functionName: "function1"});  menuEntries.push(null); // line separator  menuEntries.push({name: "Menu Entry 2", functionName: "function2"});  ss.addMenu("addMenuExample", menuEntries);}

[Untitled](./Untitled-1eac72b8-d050-4797-add3-8389b2bceb86.csv)

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewer(emailAddress)`

Adds the given user to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of editors, this method has no effect.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewer(user)`

Adds the given user to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of editors, this method has no effect.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewers(emailAddresses)`

Adds the given array of users to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If any of the users were already on the list of editors, this method has no effect for them.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `appendRow(rowContents)`

Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user asks for the last row, and then writes to that row, and an intervening mutation occurs between getting the last row and writing to it.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Appends a new row with 3 columns to the bottom of the// spreadsheet containing the values in the arraysheet.appendRow(["a man", "a plan", "panama"]);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `autoResizeColumn(columnPosition)`

Sets the width of the given column to fit its contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');// Sets the first column to a width which fits the textsheet.autoResizeColumn(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `copy(name)`

Copies the spreadsheet and returns the new one.

    // This code makes a copy of the current spreadsheet and names it appropriatelyvar ss = SpreadsheetApp.getActiveSpreadsheet();ss.copy("Copy of " + ss.getName());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `createDeveloperMetadataFinder()`

Returns a `[DeveloperMetadataFinder](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html)` for finding developer metadata within the scope of this spreadsheet. By default this considers all metadata associated with the spreadsheet, sheets, rows, and columns.

`[DeveloperMetadataFinder](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html)` — A developer metadata finder to search for metadata in the scope of this spreadsheet.

### `createTextFinder(findText)`

Creates a text finder for the spreadsheet, which can be used to find and replace text within the spreadsheet. The search starts from the first sheet of the spreadsheet.

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();// Creates  a text finder.var textFinder = spreadsheet.createTextFinder('dog');// Returns the first occurrence of 'dog' in the spreadsheet.var firstOccurrence = textFinder.findNext();// Replaces the last found occurrence of 'dog' with 'cat' and returns the number// of occurrences replaced.var numOccurrencesReplaced = findOccurrence.replaceWith('cat');

`[TextFinder](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html)` — The `[TextFinder](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html)` for the spreadsheet.

### `deleteActiveSheet()`

Deletes the currently active sheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteColumn(columnPosition)`

Deletes the column at the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at "1" - this deletes the first columnsheet.deleteColumn(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteColumns(columnPosition, howMany)`

Deletes a number of columns starting at the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at "1" - this deletes the first two columnssheet.deleteColumns(1, 2);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteRow(rowPosition)`

Deletes the row at the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at "1" - this deletes the first rowsheet.deleteRow(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteRows(rowPosition, howMany)`

Deletes a number of rows starting at the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at "1" - this deletes the first two rowssheet.deleteRows(1, 2);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteSheet(sheet)`

Deletes the specified sheet.

    // The code below deletes the specified sheet.var ss = SpreadsheetApp.getActive();var sheet = ss.getSheetByName('My Sheet');ss.deleteSheet(sheet);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `duplicateActiveSheet()`

Duplicates the active sheet and makes it the active sheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the active cell in this sheet.

**Note:** It's preferrable to use `[getCurrentCell()](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, which the returns the current highlighted cell.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Returns the active cellvar cell = sheet.getActiveCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

The term "active range" refers to the range that a user has selected in the active sheet, but in a custom function it refers to the cell being actively recalculated.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var activeRange = sheet.getActiveRange();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveRangeList()`

Returns the list of active ranges in the active sheet or `null` if there are no active ranges.

If there is a single range selected, this behaves as a `[getActiveRange()](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` call.

    var sheet = SpreadsheetApp.getActiveSheet();// Returns the list of active ranges.var activeRangeList = sheet.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the list of active ranges

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The active sheet in the spreadsheet.

### `getAs(contentType)`

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

[Untitled](./Untitled-517b6419-0371-4204-b907-ea7d7c7014b0.csv)

### `getBandings()`

Returns all the bandings in this spreadsheet.

`[Banding[]](https://developers.google.com/apps-script/reference/spreadsheet/banding.html)` — The bandings in this spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getColumnWidth(columnPosition)`

Gets the width in pixels of the given column.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.getColumnWidth(1));

`Integer` — column width in pixels

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the current cell in the active sheet or `null` if there is no current cell. The current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark border. There is never more than one current cell. When a user selects one or more cell ranges, one of the cells in the selection is the current cell.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();// Returns the current highlighted cell in the one of the active ranges.var currentCell = sheet.getCurrentCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDataRange()`

Returns a `[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` corresponding to the dimensions in which data is present.

This is functionally equivalent to creating a Range bounded by A1 and (Range.getLastColumn(), Range.getLastRow()).

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This represents ALL the datavar range = sheet.getDataRange();var values = range.getValues();// This logs the spreadsheet in CSV format with a trailing commafor (var i = 0; i < values.length; i++) {  var row = "";  for (var j = 0; j < values[i].length; j++) {    if (values[i][j]) {      row = row + values[i][j];    }    row = row + ",";  }  Logger.log(row);}

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — a range consisting of all the data in the spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDataSourceTables()`

Gets all the data source tables.

`[DataSourceTable[]](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html)` — A list of data source tables.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDeveloperMetadata()`

Get the developer metadata associated with the top-level spreadsheet.

`[DeveloperMetadata[]](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata.html)` — The developer metadata associated with this range.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getEditors()`

Gets the list of editors for this `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user who executes the script does not have edit access to the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, this method throws an exception.

`[User[]](https://developers.google.com/apps-script/reference/base/user.html)` — An array of users with edit permission.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getFormUrl()`

Returns the URL for the form that sends its responses to this spreadsheet, or `null` if this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet, the form URL returned is indeterminate. As an alternative, per sheet form URL associations can be retrieved through the `[Sheet.getFormUrl()](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFormUrl())` method.

`String` — The URL for the form that places its responses in this spreadsheet, or `null` if this spreadsheet doesn't have an associated form.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getFrozenColumns()`

Returns the number of frozen columns.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());

`Integer` — the number of frozen columns

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the number of frozen rows.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());

`Integer` — the number of frozen rows

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getId()`

Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL. For example, the spreadsheet ID in the URL https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".

    // The code below logs the ID for the active spreadsheet.Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());

`String` — The unique ID (or key) for the spreadsheet.

### `getImages()`

Returns all over-the-grid images on the sheet.

`[OverGridImage[]](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — An array of over-the-grid images.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getIterativeCalculationConvergenceThreshold()`

Returns the threshold value used during iterative calculation. When the results of successive calculation differ by less than this value, the iterative calculation stops.

`Number` — The convergence threshold.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the position of the last column that has content.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This logs the value in the very last cell of this sheetvar lastRow = sheet.getLastRow();var lastColumn = sheet.getLastColumn();var lastCell = sheet.getRange(lastRow, lastColumn);Logger.log(lastCell.getValue());

`Integer` — the last column of the sheet that contains content

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getLastRow()`

Returns the position of the last row that has content.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This logs the value in the very last cell of this sheetvar lastRow = sheet.getLastRow();var lastColumn = sheet.getLastColumn();var lastCell = sheet.getRange(lastRow, lastColumn);Logger.log(lastCell.getValue());

`Integer` — the last row of the sheet that contains content

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getMaxIterativeCalculationCycles()`

Returns the maximum number of iterations to use during iterative calculation.

`Integer` — The maximum number of calculation iterations.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getName()`

Gets the name of the document.

    var ss = SpreadsheetApp.getActiveSpreadsheet();Logger.log(ss.getName());

`String` — The name of the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Gets all the named ranges in this spreadsheet.

    // The code below logs the name of the first named range.var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();if (namedRanges.length > 1) {  Logger.log(namedRanges[0].getName());}

`[NamedRange[]](https://developers.google.com/apps-script/reference/spreadsheet/named-range.html)` — An array of all the named ranges in the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getNumSheets()`

### `getOwner()`

Returns the owner of the document, or `null` for a document in a shared drive.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var owner = ss.getOwner();Logger.log(owner.getEmail());

`[User](https://developers.google.com/apps-script/reference/base/user.html)` — The owner of the document, or `null` if the document is in a shared drive.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getProtections(type)`

Gets an array of objects representing all protected ranges or sheets in the spreadsheet.

    // Remove all range protections in the spreadsheet that the user has permission to edit.var ss = SpreadsheetApp.getActive();var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);for (var i = 0; i < protections.length; i++) {  var protection = protections[i];  if (protection.canEdit()) {    protection.remove();  }}

    // Remove all sheet protections in the spreadsheet that the user has permission to edit.var ss = SpreadsheetApp.getActive();var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);for (var i = 0; i < protections.length; i++) {  var protection = protections[i];  if (protection.canEdit()) {    protection.remove();  }}

`[Protection[]](https://developers.google.com/apps-script/reference/spreadsheet/protection.html)` — An array of objects representing all protected ranges or sheets in the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRange(a1Notation)`

Returns the range as specified in A1 notation or R1C1 notation.

    // Get a range A1:D4 on sheet titled "Invoices"var ss = SpreadsheetApp.getActiveSpreadsheet();var range = ss.getRange("Invoices!A1:D4");// Get cell A1 on the first sheetvar sheet = ss.getSheets()[0];var cell = sheet.getRange("A1");

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — the range at the location designated

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRangeByName(name)`

Returns a named range, or `null` if no range with the given name is found. If multiple sheets of the spreadsheet use the same range name, specify the sheet name without additional quotation marks — for example, `getRangeByName('TaxRates')` or `getRangeByName('Sheet Name!TaxRates')`, but not `getRangeByName('"Sheet
Name"!TaxRates')`.

    // Log the number of columns for the range named 'TaxRates' in the active spreadsheet.var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('TaxRates');if (range != null) {  Logger.log(range.getNumColumns());}

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — The range of cells with the given name.

### `getRangeList(a1Notations)`

Returns the `[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` collection representing the ranges in the same sheet specified by a non-empty list of A1 notations or R1C1 notations.

    // Get a list of ranges A1:D4, F1:H4.var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the range list at the location designated

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRecalculationInterval()`

Returns the calculation interval for this spreadsheet.

`[RecalculationInterval](https://developers.google.com/apps-script/reference/spreadsheet/recalculation-interval.html)` — The calculation interval for this spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRowHeight(rowPosition)`

Gets the height in pixels of the given row.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at 1Logger.log(sheet.getRowHeight(1));

`Integer` — row height in pixels

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSelection()`

Returns the current `[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` in the spreadsheet.

    var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();var currentCell = selection.getCurrentCell();

`[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` — the current selection

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetByName(name)`

Returns a sheet with the given name.

If multiple sheets have the same name, the leftmost one is returned. Returns `null` if there is no sheet with the given name.

    // The code below logs the index of a sheet named "Expenses"var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");if (sheet != null) {  Logger.log(sheet.getIndex());}

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The sheet with the given name.

### `getSheetId()`

Returns the ID of the sheet represented by this object.

This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically increasing integer assigned at sheet creation time that is independent of sheet position. This is useful in conjunction with methods such as `[Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)](https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer))` that take a `gridId` parameter rather than a `[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` instance.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log(sheet.getSheetId());

`Integer` — an ID for the sheet unique to the spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetName()`

Returns the sheet name.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log(sheet.getSheetName());

`String` — the name of the sheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetValues(startRow, startColumn, numRows, numColumns)`

Returns the rectangular grid of values for this range starting at the given coordinates. A -1 value given as the row or column position is equivalent to getting the very last row or column that has data in the sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// The two samples below produce the same outputvar values = sheet.getSheetValues(1, 1, 3, 3);Logger.log(values);var range = sheet.getRange(1, 1, 3, 3);values = range.getValues();Logger.log(values);

`Object[][]` — a two-dimensional array of values

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheets()`

Gets all the sheets in this spreadsheet.

    // The code below logs the name of the second sheetvar sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();if (sheets.length > 1) {  Logger.log(sheets[1].getName());}

`[Sheet[]](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — An array of all the sheets in the spreadsheet.

### `getSpreadsheetLocale()`

Gets the spreadsheet locale.

`String` — The spreadsheet locale.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSpreadsheetTimeZone()`

Gets the time zone for the spreadsheet.

`String` — The time zone, specified in "long" format (for example, "America/New_York", as listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getUrl()`

Returns the URL for the given spreadsheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();Logger.log(ss.getUrl());

`String` — The URL for the given spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getViewers()`

Gets the list of viewers and commenters for this `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user who executes the script doesn't have edit access to the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, this method throws an exception.

`[User[]](https://developers.google.com/apps-script/reference/base/user.html)` — An array of users with view or comment permission.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `hideColumn(column)`

Hides the columns in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This hides the first columnvar range = sheet.getRange("A1");sheet.hideColumn(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `hideRow(row)`

Hides the rows in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This hides the first rowvar range = sheet.getRange("A1");sheet.hideRow(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnAfter(afterPosition)`

Inserts a column after the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column after the first column positionsheet.insertColumnAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnBefore(beforePosition)`

Inserts a column before the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column in the first column positionsheet.insertColumnBefore(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnsAfter(afterPosition, howMany)`

Inserts a number of columns after the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column in the second column positionsheet.insertColumnsAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnsBefore(beforePosition, howMany)`

Inserts a number of columns before the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five columns before the first columnsheet.insertColumnsBefore(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(blobSource, column, row)`

Inserts a `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` as an image in the document at a given row and column. The image size is retrieved from the blob contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');sheet.insertImage(blob, 1, 1);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(blobSource, column, row, offsetX, offsetY)`

Inserts a `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` as an image in the document at a given row and column, with a pixel offset. The image size is retrieved from the blob contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');sheet.insertImage(blob, 1, 1, 10, 10);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(url, column, row)`

Inserts an image in the document at a given row and column.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(url, column, row, offsetX, offsetY)`

Inserts an image in the document at a given row and column, with a pixel offset.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The Inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowAfter(afterPosition)`

Inserts a row after the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a row after the first row positionsheet.insertRowAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowBefore(beforePosition)`

Inserts a row before the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a row before the first row positionsheet.insertRowBefore(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowsAfter(afterPosition, howMany)`

Inserts a number of rows after the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five rows after the first rowsheet.insertRowsAfter(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowsBefore(beforePosition, howMany)`

Inserts a number of rows before the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five rows before the first rowsheet.insertRowsBefore(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet()`

Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetIndex)`

Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetIndex, options)`

Inserts a new sheet into the spreadsheet at the given index and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet(1, {template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(options)`

Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet({template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName)`

Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet('My New Sheet');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, sheetIndex)`

Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet('My New Sheet', 1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, sheetIndex, options)`

Inserts a new sheet into the spreadsheet with the given name at the given index and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet('My New Sheet', 1, {template: templateSheet});

[Untitled](./Untitled-a83b7825-1b61-4f12-9d0e-86618373f40d.csv)

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, options)`

Inserts a new sheet into the spreadsheet with the given name and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet('My New Sheet', {template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheetWithDataSourceTable(spec)`

Inserts a new sheet in the spreadsheet, creates a `[DataSourceTable](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html)` spanning the entire sheet with the given data source specification, and starts data execution. As a side effect, makes the new sheet the active sheet.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isColumnHiddenByUser(columnPosition)`

Returns whether the given column is hidden by the user.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.isColumnHiddenByUser(1));

`Boolean` — `true` if the column is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isIterativeCalculationEnabled()`

Returns whether iterative calculation is enabled in this spreadsheet.

`Boolean` — `true` if iterative calculation is enabled, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isRowHiddenByFilter(rowPosition)`

Returns whether the given row is hidden by a filter (not a filter view).

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.isColumnHiddenByUser(1));

`Boolean` — `true` if the row is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isRowHiddenByUser(rowPosition)`

Returns whether the given row is hidden by the user.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at 1Logger.log(sheet.isRowHiddenByUser(1));

`Boolean` — `true` if the row is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `moveActiveSheet(pos)`

Moves the active sheet to the given position in the list of sheets. Throws an exception if the position is negative or greater than the number of sheets.

    // This example assumes there are two sheets in the current// active spreadsheet: one named "first", and another named "second",// and that the current active sheet (first) is in position 1var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();var sheet = spreadsheet.getSheetByName("first");// This should output 'Current index of sheet: 1'Logger.log("Current index of sheet: %s", sheet.getIndex());spreadsheet.moveActiveSheet(2);// This should output 'New index of sheet: 2'Logger.log("New index of sheet: %s", sheet.getIndex());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `moveChartToObjectSheet(chart)`

Creates a new `[SheetType.OBJECT](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT)` sheet and moves the provided chart to it. If the chart is already on its own sheet, that sheet is returned without creating a new one.

    var sheet = SpreadsheetApp.getActiveSheet();var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();sheet.insertChart(chart);var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The sheet that the chart is on.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeEditor(emailAddress)`

Removes the given user from the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeEditor(user)`

Removes the given user from the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeMenu(name)`

Removes a menu that was added by `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. The `name` argument should have the same value as the corresponding call to `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    // The onOpen function is executed automatically every time a Spreadsheet is loadedfunction onOpen() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  ss.addMenu("badMenu", [{name: "remove bad menu", functionName: "removeBadMenu"},                                       {name: "foo", functionName: "foo"}]);}function removeBadMenu() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  ss.removeMenu("badMenu");  // name must match the name used when added the menu}function foo(){//do nothing}

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeNamedRange(name)`

Deletes a named range with the given name. Throws an exception if no range with the given name is found in the spreadsheet.

    // The code below creates a new named range "foo", and then remove it.var ss = SpreadsheetApp.getActiveSpreadsheet();ss.setNamedRange("foo", ss.getActiveRange());ss.removeNamedRange("foo");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeViewer(emailAddress)`

Removes the given user from the list of viewers and commenters for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeViewer(user)`

Removes the given user from the list of viewers and commenters for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `rename(newName)`

Renames the document.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.rename("This is the new name");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `renameActiveSheet(newName)`

Renames the current active sheet to the given new name.

    // The code below renames the active sheet to "Hello world"SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet("Hello world");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveRange(range)`

Sets the specified range as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` in the active sheet, with the top left cell in the range as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var range = sheet.getRange('A1:D4');sheet.setActiveRange(range);var selection = sheet.getSelection();// Current cell: A1var currentCell = selection.getCurrentCell();// Active Range: A1:D4var activeRange = selection.getActiveRange();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveRangeList(rangeList)`

Sets the specified list of ranges as the `[active ranges](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` in the active sheet. The last range in the list is set as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var sheet = SpreadsheetApp.getActiveSheet();var rangeList = sheet.getRangeList(['D4', 'B2:C4']);sheet.setActiveRangeList(rangeList);var selection = sheet.getSelection();// Current cell: B2var currentCell = selection.getCurrentCell();// Active range: B2:C4var activeRange = selection.getActiveRange();// Active range list: [D4, B2:C4]var activeRangeList = selection.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the newly selected list of ranges

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSelection(range)`

Sets the active selection region for this sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var range = sheet.getRange("A1:D4");sheet.setActiveSelection(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSelection(a1Notation)`

Sets the active selection, as specified in A1 notation or R1C1 notation.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.setActiveSelection("A1:D4");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSheet(sheet)`

Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    // The code below makes the first sheet active in the active spreadsheet.var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSheet(sheet, restoreSelection)`

Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();var firstSheet = spreadsheet.getSheets()[0];var secondSheet = spreadsheet.getSheets()[1];// Set the first sheet as the active sheet and select the range D4:F4.spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();// Switch to the second sheet to do some work.spreadsheet.setActiveSheet(secondSheet);// Switch back to first sheet, and restore its selection.spreadsheet.setActiveSheet(firstSheet, true);// The selection of first sheet is restored, and it logs D4:F4var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();Logger.log(range.getA1Notation());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setColumnWidth(columnPosition, width)`

Sets the width of the given column in pixels.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sets the first column to a width of 200 pixelssheet.setColumnWidth(1, 200);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setCurrentCell(cell)`

Sets the specified cell as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

If the specified cell is present in an already selected range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any selected range, then any existing selection is removed and the cell becomes the current cell and the active range.

**Note:**The specified `[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` must consist of one cell, otherwise it throws an exception.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var cell = sheet.getRange('B5');sheet.setCurrentCell(cell);var selection = sheet.getSelection();// Current cell: B5var currentCell = selection.getCurrentCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setFrozenColumns(columns)`

Freezes the given number of columns. If zero, no columns are frozen.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Freezes the first columnsheet.setFrozenColumns(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setFrozenRows(rows)`

Freezes the given number of rows. If zero, no rows are frozen.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Freezes the first rowsheet.setFrozenRows(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setIterativeCalculationConvergenceThreshold(minThreshold)`

Sets the minimum threshold value for iterative calculation. When the results of successive calculation differ by less than this value, the iterative calculation stops. This value must be non-negative, and defaults to 0.05.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setIterativeCalculationEnabled(isEnabled)`

Sets whether iterative calculation is enabled in this spreadsheet. If the maximum number of calculation cycles and convergence threshold have not previously been set when the calculation is enabled, they default to 50 and 0.05 respectively. If either has been set previously, they retain their previous values.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setMaxIterativeCalculationCycles(maxIterations)`

Sets the maximum number of calculation iterations that should be performed during iterative calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setNamedRange(name, range)`

Names a range.

    // The code below creates a new named range "TaxRates" in the active spreadsheetvar ss = SpreadsheetApp.getActiveSpreadsheet();ss.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setRecalculationInterval(recalculationInterval)`

Sets how often this spreadsheet should recalculate.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setRowHeight(rowPosition, height)`

Sets the row height of the given row in pixels.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sets the first row to a height of 200 pixelssheet.setRowHeight(1, 200);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setSpreadsheetLocale(locale)`

Sets the spreadsheet locale.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setSpreadsheetTimeZone(timezone)`

Sets the time zone for the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `show(userInterface)`

Displays a custom user interface component in a dialog centered in the user's browser's viewport. The server-side script's execution is *not* suspended. To communicate with the server side, the user interface component must make asynchronous callbacks to the server-side script.

If the server-side script previously displayed a dialog that has not yet been dismissed, then the existing dialog is replaced with the newly requested dialog's user interface.

The following code snippet displays a simple `[HtmlService](https://developers.google.com/apps-script/reference/html/html-service.html)` application in a dialog with the specified title, height, and width:

    var htmlApp = HtmlService    .createHtmlOutput('<p>A change of speed, a change of style...</p>')    .setTitle('My HtmlService Application')    .setWidth(250)    .setHeight(300);SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);// The script resumes execution immediately after showing the dialog.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`

### `sort(columnPosition)`

Sorts a sheet by column, ascending.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sorts the sheet by the first column, ascendingsheet.sort(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `sort(columnPosition, ascending)`

Sorts a sheet by column. Takes a parameter to specify ascending or descending.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sorts the sheet by the first column, descendingsheet.sort(1, false);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg)`

Shows a popup window in the lower right corner of the spreadsheet with the given message.

    // Show a popup with the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg, title)`

Shows a popup window in the lower right corner of the spreadsheet with the given message and title.

    // Show a popup with the title "Status" and the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg, title, timeoutSeconds)`

Shows a popup window in the lower right corner of the spreadsheet with the given title and message, that stays visible for a certain length of time.

    // Show a 3-second popup with the title "Status" and the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status', 3);

[Untitled](./Untitled-5086dc67-e202-41ad-8044-20f72ae69daa.csv)

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `unhideColumn(column)`

Unhides the column in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This unhides the first column if it was previously hiddenvar range = sheet.getRange("A1");sheet.unhideColumn(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `unhideRow(row)`

Unhides the row in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This unhides the first row if it was previously hiddenvar range = sheet.getRange("A1");sheet.unhideRow(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `updateMenu(name, subMenus)`

Updates a menu that was added by `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. Works exactly like `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var menuEntries = [];menuEntries.push({name: "Lone Menu Entry", functionName: "function1"});ss.updateMenu("addMenuExample", menuEntries);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

![devsite-google-blue.png](devsite-google-blue-718b958a-9f0b-4aae-ac71-a81965f7636f.png)

Access and modify Google Sheets files. Common operations are adding new sheets and adding collaborators.

### Methods

[Untitled](./Untitled-70a18ded-3379-42e8-92da-8aab7fba724a.csv)

### `addDeveloperMetadata(key)`

Adds developer metadata with the specified key to the top-level spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, visibility)`

Adds developer metadata with the specified key and visibility to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, value)`

Adds developer metadata with the specified key and value to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addDeveloperMetadata(key, value, visibility)`

Adds developer metadata with the specified key, value, and visibility to the spreadsheet.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditor(emailAddress)`

Adds the given user to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditor(user)`

Adds the given user to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addEditors(emailAddresses)`

Adds the given array of users to the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addMenu(name, subMenus)`

Creates a new menu in the Spreadsheet UI.

Each menu entry runs a user-defined function. Usually, you want to call it from the `onOpen()` function so that the menu is automatically created when the spreadsheet is loaded.

    // The onOpen function is executed automatically every time a Spreadsheet is loadedfunction onOpen() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  var menuEntries = [];  // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is  // executed.  menuEntries.push({name: "Menu Entry 1", functionName: "function1"});  menuEntries.push(null); // line separator  menuEntries.push({name: "Menu Entry 2", functionName: "function2"});  ss.addMenu("addMenuExample", menuEntries);}

[Untitled](./Untitled-571053dd-b9de-43c8-a320-89decbe3b1a2.csv)

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewer(emailAddress)`

Adds the given user to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of editors, this method has no effect.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewer(user)`

Adds the given user to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user was already on the list of editors, this method has no effect.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `addViewers(emailAddresses)`

Adds the given array of users to the list of viewers for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If any of the users were already on the list of editors, this method has no effect for them.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `appendRow(rowContents)`

Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user asks for the last row, and then writes to that row, and an intervening mutation occurs between getting the last row and writing to it.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Appends a new row with 3 columns to the bottom of the// spreadsheet containing the values in the arraysheet.appendRow(["a man", "a plan", "panama"]);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `autoResizeColumn(columnPosition)`

Sets the width of the given column to fit its contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');// Sets the first column to a width which fits the textsheet.autoResizeColumn(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `copy(name)`

Copies the spreadsheet and returns the new one.

    // This code makes a copy of the current spreadsheet and names it appropriatelyvar ss = SpreadsheetApp.getActiveSpreadsheet();ss.copy("Copy of " + ss.getName());

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `createDeveloperMetadataFinder()`

Returns a `[DeveloperMetadataFinder](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html)` for finding developer metadata within the scope of this spreadsheet. By default this considers all metadata associated with the spreadsheet, sheets, rows, and columns.

`[DeveloperMetadataFinder](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html)` — A developer metadata finder to search for metadata in the scope of this spreadsheet.

### `createTextFinder(findText)`

Creates a text finder for the spreadsheet, which can be used to find and replace text within the spreadsheet. The search starts from the first sheet of the spreadsheet.

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();// Creates  a text finder.var textFinder = spreadsheet.createTextFinder('dog');// Returns the first occurrence of 'dog' in the spreadsheet.var firstOccurrence = textFinder.findNext();// Replaces the last found occurrence of 'dog' with 'cat' and returns the number// of occurrences replaced.var numOccurrencesReplaced = findOccurrence.replaceWith('cat');

`[TextFinder](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html)` — The `[TextFinder](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html)` for the spreadsheet.

### `deleteActiveSheet()`

Deletes the currently active sheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteColumn(columnPosition)`

Deletes the column at the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at "1" - this deletes the first columnsheet.deleteColumn(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteColumns(columnPosition, howMany)`

Deletes a number of columns starting at the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at "1" - this deletes the first two columnssheet.deleteColumns(1, 2);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteRow(rowPosition)`

Deletes the row at the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at "1" - this deletes the first rowsheet.deleteRow(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteRows(rowPosition, howMany)`

Deletes a number of rows starting at the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at "1" - this deletes the first two rowssheet.deleteRows(1, 2);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `deleteSheet(sheet)`

Deletes the specified sheet.

    // The code below deletes the specified sheet.var ss = SpreadsheetApp.getActive();var sheet = ss.getSheetByName('My Sheet');ss.deleteSheet(sheet);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `duplicateActiveSheet()`

Duplicates the active sheet and makes it the active sheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the active cell in this sheet.

**Note:** It's preferrable to use `[getCurrentCell()](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, which the returns the current highlighted cell.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Returns the active cellvar cell = sheet.getActiveCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the selected range in the active sheet, or `null` if there is no active range. If multiple ranges are selected this method returns only the last selected range.

The term "active range" refers to the range that a user has selected in the active sheet, but in a custom function it refers to the cell being actively recalculated.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var activeRange = sheet.getActiveRange();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getActiveRangeList()`

Returns the list of active ranges in the active sheet or `null` if there are no active ranges.

If there is a single range selected, this behaves as a `[getActiveRange()](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` call.

    var sheet = SpreadsheetApp.getActiveSheet();// Returns the list of active ranges.var activeRangeList = sheet.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the list of active ranges

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The active sheet in the spreadsheet.

### `getAs(contentType)`

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

[Untitled](./Untitled-be9e653a-e5f8-48a5-9a2d-29176f4d2259.csv)

### `getBandings()`

Returns all the bandings in this spreadsheet.

`[Banding[]](https://developers.google.com/apps-script/reference/spreadsheet/banding.html)` — The bandings in this spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getColumnWidth(columnPosition)`

Gets the width in pixels of the given column.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.getColumnWidth(1));

`Integer` — column width in pixels

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the current cell in the active sheet or `null` if there is no current cell. The current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark border. There is never more than one current cell. When a user selects one or more cell ranges, one of the cells in the selection is the current cell.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();// Returns the current highlighted cell in the one of the active ranges.var currentCell = sheet.getCurrentCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDataRange()`

Returns a `[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` corresponding to the dimensions in which data is present.

This is functionally equivalent to creating a Range bounded by A1 and (Range.getLastColumn(), Range.getLastRow()).

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This represents ALL the datavar range = sheet.getDataRange();var values = range.getValues();// This logs the spreadsheet in CSV format with a trailing commafor (var i = 0; i < values.length; i++) {  var row = "";  for (var j = 0; j < values[i].length; j++) {    if (values[i][j]) {      row = row + values[i][j];    }    row = row + ",";  }  Logger.log(row);}

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — a range consisting of all the data in the spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDataSourceTables()`

Gets all the data source tables.

`[DataSourceTable[]](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html)` — A list of data source tables.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getDeveloperMetadata()`

Get the developer metadata associated with the top-level spreadsheet.

`[DeveloperMetadata[]](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata.html)` — The developer metadata associated with this range.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getEditors()`

Gets the list of editors for this `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user who executes the script does not have edit access to the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, this method throws an exception.

`[User[]](https://developers.google.com/apps-script/reference/base/user.html)` — An array of users with edit permission.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getFormUrl()`

Returns the URL for the form that sends its responses to this spreadsheet, or `null` if this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet, the form URL returned is indeterminate. As an alternative, per sheet form URL associations can be retrieved through the `[Sheet.getFormUrl()](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFormUrl())` method.

`String` — The URL for the form that places its responses in this spreadsheet, or `null` if this spreadsheet doesn't have an associated form.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getFrozenColumns()`

Returns the number of frozen columns.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());

`Integer` — the number of frozen columns

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the number of frozen rows.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());

`Integer` — the number of frozen rows

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getId()`

Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL. For example, the spreadsheet ID in the URL https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".

    // The code below logs the ID for the active spreadsheet.Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());

`String` — The unique ID (or key) for the spreadsheet.

### `getImages()`

Returns all over-the-grid images on the sheet.

`[OverGridImage[]](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — An array of over-the-grid images.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getIterativeCalculationConvergenceThreshold()`

Returns the threshold value used during iterative calculation. When the results of successive calculation differ by less than this value, the iterative calculation stops.

`Number` — The convergence threshold.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Returns the position of the last column that has content.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This logs the value in the very last cell of this sheetvar lastRow = sheet.getLastRow();var lastColumn = sheet.getLastColumn();var lastCell = sheet.getRange(lastRow, lastColumn);Logger.log(lastCell.getValue());

`Integer` — the last column of the sheet that contains content

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getLastRow()`

Returns the position of the last row that has content.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This logs the value in the very last cell of this sheetvar lastRow = sheet.getLastRow();var lastColumn = sheet.getLastColumn();var lastCell = sheet.getRange(lastRow, lastColumn);Logger.log(lastCell.getValue());

`Integer` — the last row of the sheet that contains content

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getMaxIterativeCalculationCycles()`

Returns the maximum number of iterations to use during iterative calculation.

`Integer` — The maximum number of calculation iterations.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getName()`

Gets the name of the document.

    var ss = SpreadsheetApp.getActiveSpreadsheet();Logger.log(ss.getName());

`String` — The name of the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

Gets all the named ranges in this spreadsheet.

    // The code below logs the name of the first named range.var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();if (namedRanges.length > 1) {  Logger.log(namedRanges[0].getName());}

`[NamedRange[]](https://developers.google.com/apps-script/reference/spreadsheet/named-range.html)` — An array of all the named ranges in the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getNumSheets()`

### `getOwner()`

Returns the owner of the document, or `null` for a document in a shared drive.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var owner = ss.getOwner();Logger.log(owner.getEmail());

`[User](https://developers.google.com/apps-script/reference/base/user.html)` — The owner of the document, or `null` if the document is in a shared drive.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getProtections(type)`

Gets an array of objects representing all protected ranges or sheets in the spreadsheet.

    // Remove all range protections in the spreadsheet that the user has permission to edit.var ss = SpreadsheetApp.getActive();var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);for (var i = 0; i < protections.length; i++) {  var protection = protections[i];  if (protection.canEdit()) {    protection.remove();  }}

    // Remove all sheet protections in the spreadsheet that the user has permission to edit.var ss = SpreadsheetApp.getActive();var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);for (var i = 0; i < protections.length; i++) {  var protection = protections[i];  if (protection.canEdit()) {    protection.remove();  }}

`[Protection[]](https://developers.google.com/apps-script/reference/spreadsheet/protection.html)` — An array of objects representing all protected ranges or sheets in the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRange(a1Notation)`

Returns the range as specified in A1 notation or R1C1 notation.

    // Get a range A1:D4 on sheet titled "Invoices"var ss = SpreadsheetApp.getActiveSpreadsheet();var range = ss.getRange("Invoices!A1:D4");// Get cell A1 on the first sheetvar sheet = ss.getSheets()[0];var cell = sheet.getRange("A1");

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — the range at the location designated

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRangeByName(name)`

Returns a named range, or `null` if no range with the given name is found. If multiple sheets of the spreadsheet use the same range name, specify the sheet name without additional quotation marks — for example, `getRangeByName('TaxRates')` or `getRangeByName('Sheet Name!TaxRates')`, but not `getRangeByName('"Sheet
Name"!TaxRates')`.

    // Log the number of columns for the range named 'TaxRates' in the active spreadsheet.var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('TaxRates');if (range != null) {  Logger.log(range.getNumColumns());}

`[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` — The range of cells with the given name.

### `getRangeList(a1Notations)`

Returns the `[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` collection representing the ranges in the same sheet specified by a non-empty list of A1 notations or R1C1 notations.

    // Get a list of ranges A1:D4, F1:H4.var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the range list at the location designated

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRecalculationInterval()`

Returns the calculation interval for this spreadsheet.

`[RecalculationInterval](https://developers.google.com/apps-script/reference/spreadsheet/recalculation-interval.html)` — The calculation interval for this spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getRowHeight(rowPosition)`

Gets the height in pixels of the given row.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at 1Logger.log(sheet.getRowHeight(1));

`Integer` — row height in pixels

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSelection()`

Returns the current `[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` in the spreadsheet.

    var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();var currentCell = selection.getCurrentCell();

`[Selection](https://developers.google.com/apps-script/reference/spreadsheet/selection.html)` — the current selection

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetByName(name)`

Returns a sheet with the given name.

If multiple sheets have the same name, the leftmost one is returned. Returns `null` if there is no sheet with the given name.

    // The code below logs the index of a sheet named "Expenses"var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");if (sheet != null) {  Logger.log(sheet.getIndex());}

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The sheet with the given name.

### `getSheetId()`

Returns the ID of the sheet represented by this object.

This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically increasing integer assigned at sheet creation time that is independent of sheet position. This is useful in conjunction with methods such as `[Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)](https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer))` that take a `gridId` parameter rather than a `[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` instance.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log(sheet.getSheetId());

`Integer` — an ID for the sheet unique to the spreadsheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetName()`

Returns the sheet name.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];Logger.log(sheet.getSheetName());

`String` — the name of the sheet

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheetValues(startRow, startColumn, numRows, numColumns)`

Returns the rectangular grid of values for this range starting at the given coordinates. A -1 value given as the row or column position is equivalent to getting the very last row or column that has data in the sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// The two samples below produce the same outputvar values = sheet.getSheetValues(1, 1, 3, 3);Logger.log(values);var range = sheet.getRange(1, 1, 3, 3);values = range.getValues();Logger.log(values);

`Object[][]` — a two-dimensional array of values

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSheets()`

Gets all the sheets in this spreadsheet.

    // The code below logs the name of the second sheetvar sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();if (sheets.length > 1) {  Logger.log(sheets[1].getName());}

`[Sheet[]](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — An array of all the sheets in the spreadsheet.

### `getSpreadsheetLocale()`

Gets the spreadsheet locale.

`String` — The spreadsheet locale.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getSpreadsheetTimeZone()`

Gets the time zone for the spreadsheet.

`String` — The time zone, specified in "long" format (for example, "America/New_York", as listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getUrl()`

Returns the URL for the given spreadsheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();Logger.log(ss.getUrl());

`String` — The URL for the given spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `getViewers()`

Gets the list of viewers and commenters for this `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. If the user who executes the script doesn't have edit access to the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, this method throws an exception.

`[User[]](https://developers.google.com/apps-script/reference/base/user.html)` — An array of users with view or comment permission.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `hideColumn(column)`

Hides the columns in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This hides the first columnvar range = sheet.getRange("A1");sheet.hideColumn(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `hideRow(row)`

Hides the rows in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This hides the first rowvar range = sheet.getRange("A1");sheet.hideRow(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnAfter(afterPosition)`

Inserts a column after the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column after the first column positionsheet.insertColumnAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnBefore(beforePosition)`

Inserts a column before the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column in the first column positionsheet.insertColumnBefore(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnsAfter(afterPosition, howMany)`

Inserts a number of columns after the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a column in the second column positionsheet.insertColumnsAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertColumnsBefore(beforePosition, howMany)`

Inserts a number of columns before the given column position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five columns before the first columnsheet.insertColumnsBefore(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(blobSource, column, row)`

Inserts a `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` as an image in the document at a given row and column. The image size is retrieved from the blob contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');sheet.insertImage(blob, 1, 1);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(blobSource, column, row, offsetX, offsetY)`

Inserts a `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` as an image in the document at a given row and column, with a pixel offset. The image size is retrieved from the blob contents.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');sheet.insertImage(blob, 1, 1, 10, 10);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(url, column, row)`

Inserts an image in the document at a given row and column.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertImage(url, column, row, offsetX, offsetY)`

Inserts an image in the document at a given row and column, with a pixel offset.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);

`[OverGridImage](https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image.html)` — The Inserted image.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowAfter(afterPosition)`

Inserts a row after the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a row after the first row positionsheet.insertRowAfter(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowBefore(beforePosition)`

Inserts a row before the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts a row before the first row positionsheet.insertRowBefore(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowsAfter(afterPosition, howMany)`

Inserts a number of rows after the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five rows after the first rowsheet.insertRowsAfter(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertRowsBefore(beforePosition, howMany)`

Inserts a number of rows before the given row position.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This inserts five rows before the first rowsheet.insertRowsBefore(1, 5);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet()`

Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetIndex)`

Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetIndex, options)`

Inserts a new sheet into the spreadsheet at the given index and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet(1, {template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(options)`

Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet({template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName)`

Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet('My New Sheet');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, sheetIndex)`

Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.insertSheet('My New Sheet', 1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, sheetIndex, options)`

Inserts a new sheet into the spreadsheet with the given name at the given index and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet('My New Sheet', 1, {template: templateSheet});

[Untitled](./Untitled-1a9019c2-7c6b-4033-9bf2-9b305cb8c5c8.csv)

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheet(sheetName, options)`

Inserts a new sheet into the spreadsheet with the given name and uses optional advanced arguments. The new sheet becomes the active sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var templateSheet = ss.getSheetByName('Sales');ss.insertSheet('My New Sheet', {template: templateSheet});

### Advanced parameters

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `insertSheetWithDataSourceTable(spec)`

Inserts a new sheet in the spreadsheet, creates a `[DataSourceTable](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html)` spanning the entire sheet with the given data source specification, and starts data execution. As a side effect, makes the new sheet the active sheet.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source type.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isColumnHiddenByUser(columnPosition)`

Returns whether the given column is hidden by the user.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.isColumnHiddenByUser(1));

`Boolean` — `true` if the column is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isIterativeCalculationEnabled()`

Returns whether iterative calculation is enabled in this spreadsheet.

`Boolean` — `true` if iterative calculation is enabled, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isRowHiddenByFilter(rowPosition)`

Returns whether the given row is hidden by a filter (not a filter view).

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Columns start at 1Logger.log(sheet.isColumnHiddenByUser(1));

`Boolean` — `true` if the row is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `isRowHiddenByUser(rowPosition)`

Returns whether the given row is hidden by the user.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Rows start at 1Logger.log(sheet.isRowHiddenByUser(1));

`Boolean` — `true` if the row is hidden, `false` otherwise.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `moveActiveSheet(pos)`

Moves the active sheet to the given position in the list of sheets. Throws an exception if the position is negative or greater than the number of sheets.

    // This example assumes there are two sheets in the current// active spreadsheet: one named "first", and another named "second",// and that the current active sheet (first) is in position 1var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();var sheet = spreadsheet.getSheetByName("first");// This should output 'Current index of sheet: 1'Logger.log("Current index of sheet: %s", sheet.getIndex());spreadsheet.moveActiveSheet(2);// This should output 'New index of sheet: 2'Logger.log("New index of sheet: %s", sheet.getIndex());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `moveChartToObjectSheet(chart)`

Creates a new `[SheetType.OBJECT](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT)` sheet and moves the provided chart to it. If the chart is already on its own sheet, that sheet is returned without creating a new one.

    var sheet = SpreadsheetApp.getActiveSheet();var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();sheet.insertChart(chart);var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — The sheet that the chart is on.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeEditor(emailAddress)`

Removes the given user from the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeEditor(user)`

Removes the given user from the list of editors for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeMenu(name)`

Removes a menu that was added by `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. The `name` argument should have the same value as the corresponding call to `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    // The onOpen function is executed automatically every time a Spreadsheet is loadedfunction onOpen() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  ss.addMenu("badMenu", [{name: "remove bad menu", functionName: "removeBadMenu"},                                       {name: "foo", functionName: "foo"}]);}function removeBadMenu() {  var ss = SpreadsheetApp.getActiveSpreadsheet();  ss.removeMenu("badMenu");  // name must match the name used when added the menu}function foo(){//do nothing}

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeNamedRange(name)`

Deletes a named range with the given name. Throws an exception if no range with the given name is found in the spreadsheet.

    // The code below creates a new named range "foo", and then remove it.var ss = SpreadsheetApp.getActiveSpreadsheet();ss.setNamedRange("foo", ss.getActiveRange());ss.removeNamedRange("foo");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeViewer(emailAddress)`

Removes the given user from the list of viewers and commenters for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `removeViewer(user)`

Removes the given user from the list of viewers and commenters for the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` if they belong to a class of users who have general access—for example, if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is shared with the user's entire domain, or if the `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This `[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `rename(newName)`

Renames the document.

    var ss = SpreadsheetApp.getActiveSpreadsheet();ss.rename("This is the new name");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `renameActiveSheet(newName)`

Renames the current active sheet to the given new name.

    // The code below renames the active sheet to "Hello world"SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet("Hello world");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveRange(range)`

Sets the specified range as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` in the active sheet, with the top left cell in the range as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var range = sheet.getRange('A1:D4');sheet.setActiveRange(range);var selection = sheet.getSelection();// Current cell: A1var currentCell = selection.getCurrentCell();// Active Range: A1:D4var activeRange = selection.getActiveRange();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveRangeList(rangeList)`

Sets the specified list of ranges as the `[active ranges](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` in the active sheet. The last range in the list is set as the `[active range](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var sheet = SpreadsheetApp.getActiveSheet();var rangeList = sheet.getRangeList(['D4', 'B2:C4']);sheet.setActiveRangeList(rangeList);var selection = sheet.getSelection();// Current cell: B2var currentCell = selection.getCurrentCell();// Active range: B2:C4var activeRange = selection.getActiveRange();// Active range list: [D4, B2:C4]var activeRangeList = selection.getActiveRangeList();

`[RangeList](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html)` — the newly selected list of ranges

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSelection(range)`

Sets the active selection region for this sheet.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];var range = sheet.getRange("A1:D4");sheet.setActiveSelection(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSelection(a1Notation)`

Sets the active selection, as specified in A1 notation or R1C1 notation.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];sheet.setActiveSelection("A1:D4");

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSheet(sheet)`

Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    // The code below makes the first sheet active in the active spreadsheet.var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setActiveSheet(sheet, restoreSelection)`

Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a different spreadsheet.

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();var firstSheet = spreadsheet.getSheets()[0];var secondSheet = spreadsheet.getSheets()[1];// Set the first sheet as the active sheet and select the range D4:F4.spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();// Switch to the second sheet to do some work.spreadsheet.setActiveSheet(secondSheet);// Switch back to first sheet, and restore its selection.spreadsheet.setActiveSheet(firstSheet, true);// The selection of first sheet is restored, and it logs D4:F4var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();Logger.log(range.getA1Notation());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setColumnWidth(columnPosition, width)`

Sets the width of the given column in pixels.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sets the first column to a width of 200 pixelssheet.setColumnWidth(1, 200);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setCurrentCell(cell)`

Sets the specified cell as the `[current cell](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

If the specified cell is present in an already selected range, then that range becomes the active range with the cell as the current cell.

If the specified cell is not present in any selected range, then any existing selection is removed and the cell becomes the current cell and the active range.

**Note:**The specified `[Range](https://developers.google.com/apps-script/reference/spreadsheet/range.html)` must consist of one cell, otherwise it throws an exception.

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();var cell = sheet.getRange('B5');sheet.setCurrentCell(cell);var selection = sheet.getSelection();// Current cell: B5var currentCell = selection.getCurrentCell();

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setFrozenColumns(columns)`

Freezes the given number of columns. If zero, no columns are frozen.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Freezes the first columnsheet.setFrozenColumns(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setFrozenRows(rows)`

Freezes the given number of rows. If zero, no rows are frozen.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Freezes the first rowsheet.setFrozenRows(1);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setIterativeCalculationConvergenceThreshold(minThreshold)`

Sets the minimum threshold value for iterative calculation. When the results of successive calculation differ by less than this value, the iterative calculation stops. This value must be non-negative, and defaults to 0.05.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setIterativeCalculationEnabled(isEnabled)`

Sets whether iterative calculation is enabled in this spreadsheet. If the maximum number of calculation cycles and convergence threshold have not previously been set when the calculation is enabled, they default to 50 and 0.05 respectively. If either has been set previously, they retain their previous values.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setMaxIterativeCalculationCycles(maxIterations)`

Sets the maximum number of calculation iterations that should be performed during iterative calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setNamedRange(name, range)`

Names a range.

    // The code below creates a new named range "TaxRates" in the active spreadsheetvar ss = SpreadsheetApp.getActiveSpreadsheet();ss.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setRecalculationInterval(recalculationInterval)`

Sets how often this spreadsheet should recalculate.

`[Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)` — This spreadsheet, for chaining.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setRowHeight(rowPosition, height)`

Sets the row height of the given row in pixels.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sets the first row to a height of 200 pixelssheet.setRowHeight(1, 200);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setSpreadsheetLocale(locale)`

Sets the spreadsheet locale.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `setSpreadsheetTimeZone(timezone)`

Sets the time zone for the spreadsheet.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `show(userInterface)`

Displays a custom user interface component in a dialog centered in the user's browser's viewport. The server-side script's execution is *not* suspended. To communicate with the server side, the user interface component must make asynchronous callbacks to the server-side script.

If the server-side script previously displayed a dialog that has not yet been dismissed, then the existing dialog is replaced with the newly requested dialog's user interface.

The following code snippet displays a simple `[HtmlService](https://developers.google.com/apps-script/reference/html/html-service.html)` application in a dialog with the specified title, height, and width:

    var htmlApp = HtmlService    .createHtmlOutput('<p>A change of speed, a change of style...</p>')    .setTitle('My HtmlService Application')    .setWidth(250)    .setHeight(300);SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);// The script resumes execution immediately after showing the dialog.

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/script.container.ui`

### `sort(columnPosition)`

Sorts a sheet by column, ascending.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sorts the sheet by the first column, ascendingsheet.sort(1);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `sort(columnPosition, ascending)`

Sorts a sheet by column. Takes a parameter to specify ascending or descending.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// Sorts the sheet by the first column, descendingsheet.sort(1, false);

`[Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html)` — the sheet, useful for method chaining

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg)`

Shows a popup window in the lower right corner of the spreadsheet with the given message.

    // Show a popup with the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg, title)`

Shows a popup window in the lower right corner of the spreadsheet with the given message and title.

    // Show a popup with the title "Status" and the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status');

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `toast(msg, title, timeoutSeconds)`

Shows a popup window in the lower right corner of the spreadsheet with the given title and message, that stays visible for a certain length of time.

    // Show a 3-second popup with the title "Status" and the message "Task started".SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status', 3);

[Untitled](./Untitled-d83c0171-4cee-40f4-a9a9-1a32a26864f7.csv)

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `unhideColumn(column)`

Unhides the column in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This unhides the first column if it was previously hiddenvar range = sheet.getRange("A1");sheet.unhideColumn(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `unhideRow(row)`

Unhides the row in the given range.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var sheet = ss.getSheets()[0];// This unhides the first row if it was previously hiddenvar range = sheet.getRange("A1");sheet.unhideRow(range);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

### `updateMenu(name, subMenus)`

Updates a menu that was added by `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`. Works exactly like `[addMenu(name, subMenus)](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)`.

    var ss = SpreadsheetApp.getActiveSpreadsheet();var menuEntries = [];menuEntries.push({name: "Lone Menu Entry", functionName: "function1"});ss.updateMenu("addMenuExample", menuEntries);

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

[Class Spreadsheet | Apps Script | Google Developers](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet)