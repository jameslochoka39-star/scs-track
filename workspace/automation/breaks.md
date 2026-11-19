| Break | Status | Cannot happen because / Patch details |
| :--- | :--- | :--- |
| 1 | found | found -- patched at line 5, commit 4f17d77 (fixed getSheetBYNAME case sensitivity) |
| 2 | safe | cannot happen because line 6 reads fixed range A12:C15 on DASHBOARD |
| 3 | safe | cannot happen because line 8 filters exact match row[2] === "REORDER" |
| 4 | safe | cannot happen because lines 11-12 create the REMINDERS sheet if missing |
| 5 | found | found -- patched at line 16, commit 4f17d77 (wrapped headers in 2D array for setValues) |
| 6 | safe | cannot happen because checkStock() was executed directly in the Apps Script editor run log calling every line |
| 7 | safe | cannot happen because line 15 clears old contents before writing new results |
| 8 | safe | cannot happen because the function is run manually from the Apps Script editor with no time-driven trigger configured |
| 9 | safe | cannot happen because Edge case test confirmed line 18 (lowStockItems.length > 0) prevents empty setValues errors |
