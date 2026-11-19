// AI-assisted, directed by lochoka

function checkStock() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetByName("DASHBOARD");
  const stockData = dashboard.getRange("A12:C15").getValues();

  const lowStockItems = stockData.filter((row) => row[2] === "REORDER");

  let reminders = ss.getSheetByName("REMINDERS");
  if (!reminders) {
    reminders = ss.insertSheet("REMINDERS");
  }

  reminders.clearContents();
  reminders.getRange("A1:C1").setValues([["ITEMS", "CURRENT STOCK", "STATUS"]]);

  if (lowStockItems.length > 0) {
    reminders.getRange(2, 1, lowStockItems.length, 3).setValues(lowStockItems);
  }
}
