# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, tokens, or secrets in source files and URLs.
Found: `send-sms.js` line 9 hardcodes `SMS_API_KEY` directly in source code instead of reading `process.env.SMS_API_KEY`, appends the key as a URL query parameter (`?key=...`), and prints it in `--dry-run`.
Evidence: `grep -n "API_KEY" workspace/stock-tools/send-sms.js` returned line 9 with a hardcoded string literal instead of `process.env`.

### Edge cases
Ugly inputs, written before trying them: (1) Quoted item names containing commas like `"Nails, 3 inch"`, (2) blank `In stock` cells like `Cement 50 kg,,20`, (3) boundary equality where `In stock === Reorder at` (`20` and `20`).
Found: Three bugs in `reorder.js`: `parseCsv` splits naively on `,` (shifting columns on `"Nails, 3 inch"`), empty `In stock` becomes `NaN` so Cement is silently omitted, and `reorderList` uses `<` instead of `<=` so `grinding discs 115 mm` (`20` of `20`) is skipped.
Evidence: `node reorder.js workspace/stock-tools/stock-export.csv` printed only 3 items (`Welding rods 2.5 mm`, `ng'ombe salt lick`, `Oxygen refill`) and omitted `Cement 50 kg`, `Nails, 3 inch`, and `grinding discs 115 mm`.

### Wrong versions
Looked for: JavaScript/Node APIs that conflict with `README.md` ("Works on any Node. No packages to install.").
Found: `reorder.js` line 28 uses `Object.groupBy()`, which was introduced in Node 21 and fails with `TypeError: Object.groupBy is not a function` on Node 18/20 LTS.
Evidence: `node --version` printed `v22.22.1`, while `Object.groupBy` on `reorder.js` line 28 requires Node `v21.0.0+` (fails on Node `v18`/`v20` LTS despite `README.md` stating `Works on any Node.`).

### Invented libraries
Looked for: Non-existent imports or hallucinated functions from Node built-in modules.
Found: `send-sms.js` line 5 destructures `{ fetchWithRetry }` from `"node:http"`, which does not exist in Node.js.
Evidence: `node workspace/stock-tools/send-sms.js workspace/stock-tools/stock-export.csv` crashed with `TypeError: fetchWithRetry is not a function` at `main (send-sms.js:25:21)`.

The one to fix first, and why: Remove the hardcoded `SMS_API_KEY` in `send-sms.js` by hand first so a live secret cannot leak into git history or logs, then fix the `reorderList` boundary (`<=`) and CSV parsing bugs in `reorder.js` so stock orders are not silently missed.

## Piece 2: my own SCS3.5 script (workspace/automation/checkStock.gs)

### Auth
Looked for: Hardcoded spreadsheet IDs, API keys, tokens, or emails in `checkStock.gs`.
Found: Clean — uses `SpreadsheetApp.getActiveSpreadsheet()` with container-bound authorization and zero hardcoded IDs or credentials.
Evidence: Read `workspace/automation/checkStock.gs` lines 1–21 on 2026-11-24; `grep -En "http|key|token|secret|@" workspace/automation/checkStock.gs` returned no matches.

### Edge cases
Ugly inputs, written before trying them: (1) Zero rows matching `"REORDER"`, (2) missing `"REMINDERS"` sheet, (3) case mismatch or whitespace in column C (`"reorder"` vs `"REORDER"`), (4) missing `"DASHBOARD"` sheet (`dashboard` is `null`).
Found: Zero `"REORDER"` rows and missing `"REMINDERS"` tab are handled safely (lines 11–13 and 18–20). However, line 5 does not guard if `dashboard` is `null`, line 6 hardcodes `A12:C15` (rows below row 15 are ignored), and line 8 uses strict `row[2] === "REORDER"` without `.trim().toUpperCase()`.
Evidence: Inspected `workspace/automation/checkStock.gs` lines 5–8 and verified against `workspace/automation/test-log.md` (2026-11-24).

### Wrong versions
Looked for: Deprecated Apps Script APIs or legacy Rhino-only syntax.
Found: Clean — uses standard V8 `const`/`let`, arrow functions, and current `SpreadsheetApp` methods (`getSheetByName`, `getRange`, `getValues`, `setValues`).
Evidence: Read `workspace/automation/checkStock.gs` lines 1–21 on 2026-11-24; runs cleanly in Apps Script V8 runtime per `workspace/automation/receipt-log.md`.

### Invented libraries
Looked for: Hallucinated Apps Script services, external imports, or non-existent methods.
Found: Clean — initial draft had a casing typo (`getSheetBYNAME`), which was fixed in commit `4f17d77`; all remaining calls (`getActiveSpreadsheet`, `getSheetByName`, `insertSheet`, `clearContents`, `getRange`, `getValues`, `setValues`) are standard Google Apps Script `SpreadsheetApp` methods.
Evidence: Verified every call in `workspace/automation/checkStock.gs` against `workspace/automation/reading-log.md` and `breaks.md` on 2026-11-24.

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Keep `checkStock.gs` as verified for the fixed `A12:C15` dashboard layout, and note the open-ended row range (`getLastRow()`) and case-insensitive `.trim().toUpperCase()` check on the sheet copy if the client adds rows beyond row 15.
