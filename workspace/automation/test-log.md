# Test log -- SCS3.5

<!-- The answers are worked out by hand, on paper, BEFORE the script runs.  Expected first, actual after, edge case -->
<!-- last.  Pass or fail: the result now (fail -> pass after a patch is fine).  Where a test fails: trace it, change  -->
<!-- the one line by hand, run again, commit the patch on its own, and write its line and commit here.               -->

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | DASHBOARD A12:C15 with Sugar (-14, REORDER) and Rice (5, REORDER) | REMINDERS lists headers ITEMS, CURRENT STOCK, STATUS with Sugar (-14, REORDER) and Rice (5, REORDER) | Initial run failed due to getSheetBYNAME and 1D array; after patch, REMINDERS lists Sugar and Rice | fail -> pass | Lines 5, 16 (commit 4f17d77) |
| Test 2 | Update DASHBOARD so only Sugar is REORDER | REMINDERS clears old rows and lists only Sugar (-14, REORDER) | REMINDERS cleared Rice and listed only Sugar | pass | — |
| Edge case | DASHBOARD A12:C15 has 0 REORDER rows | REMINDERS writes headers only with no empty-range error | Headers written cleanly, no error | pass | — |
| Second edge case (optional, SGL menu) | | | | | |
| Partner as a careless owner | | | | | |
| Re-run in front of the trainer | | | | | |
