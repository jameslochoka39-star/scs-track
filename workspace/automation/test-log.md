| Test | Input | Expected | Actual | Result | Patch line & commit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Test 1 | DASHBOARD A12:C15 with Sugar (-14, REORDER) and Rice (5, REORDER) | REMINDERS tab lists ITEMS, CURRENT STOCK, STATUS with Sugar (-14, REORDER) and Rice (5, REORDER) | Initial run failed due to getSheetBYNAME and 1D array; after patch, REMINDERS lists Sugar and Rice | fail -> pass | Lines 5, 16 (commit 4f17d77) |
| Test 2 | Update DASHBOARD so only Sugar is REORDER | REMINDERS tab clears old rows and lists only Sugar (-14, REORDER) | REMINDERS cleared Rice and listed only Sugar | pass | — |
| Edge case | DASHBOARD A12:C15 has 0 REORDER rows | REMINDERS tab writes headers only with no empty-range error | Headers written cleanly, no error | pass | — |
