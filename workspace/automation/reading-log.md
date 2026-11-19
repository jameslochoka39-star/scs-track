| Line | Code | Meaning in my own words |
| :--- | :--- | :--- |
| 3 | `function checkStock() {` | Starts the checkStock function to check inventory levels |
| 4 | `const ss = SpreadsheetApp.getActiveSpreadsheet();` | Gets the active Google Spreadsheet file |
| 5 | `const dashboard = ss.getSheetByName("DASHBOARD");` | Opens the tab named DASHBOARD |
| 6 | `const stockData = dashboard.getRange("A12:C15").getValues();` | Reads all values from cells A12 to C15 into a list |
| 8 | `const lowStockItems = stockData.filter(row => row[2] === "REORDER");` | Keeps only rows where column C is REORDER |
| 10 | `let reminders = ss.getSheetByName("REMINDERS");` | Looks for an existing tab named REMINDERS |
| 11 | `if (!reminders) {` | Checks if the REMINDERS tab does not exist yet |
| 12 | `reminders = ss.insertSheet("REMINDERS");` | Creates a new REMINDERS tab if it was missing |
| 15 | `reminders.clearContents();` | Clears out any old data in the REMINDERS tab |
| 16 | `reminders.getRange("A1:C1").setValues([["ITEMS", "CURRENT STOCK", "STATUS"]]);` | Writes the three column headers into row 1 |
| 18 | `if (lowStockItems.length > 0) {` | Checks if at least one item matched REORDER |
| 19 | `reminders.getRange(2, 1, lowStockItems.length, 3).setValues(lowStockItems);` | Writes the low-stock rows starting at row 2 |
