Label: AI-assisted, directed by lochoka
Tool: Gemini
Spec initialled on: 2026-11-19
First prompt sent on: 2026-11-19

## First prompt
function checkStock() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetBYNAME("DASHBOARD");
  const StockData = dashboard.getRange("A12:C15").
  getValues();
  const lowStockItems =StockData.filter (row => row[2] === "REORDER");
  let reminders = ss.getSheetByName("REMINDERS")
  if(!reminders){
    reminders = ss.insertSheet ("REMINDERS");
  }
  reminders.clearContents();
  reminders.getRange("A1:C1").setValues ( ["ITEMS", "CURRENT STOCK" ,"STATUS"]);
  if (lowStockItems.length > 0){
    reminders.getRange(2,1, lowStockItems.length,3).
    setValues(lowStockItems);
  }
}# fix this
