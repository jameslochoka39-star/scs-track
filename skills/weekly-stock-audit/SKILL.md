# Weekly Stock Reorder Check

## Name
weekly-stock-audit

## When to use
Every Monday morning before sending supplier reorder lists, or whenever a new `stock-export.csv` is downloaded from the shop sheet.

## Steps
1. Save the fresh CSV export to `workspace/stock-tools/stock-export.csv`.
2. Run `node --test workspace/stock-tools/reorder.test.js` to confirm all unit tests pass.
3. Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` and verify every low-stock item appears under its supplier.
4. Check `git diff` and confirm no secrets or client PII exist in the workspace.

## How you know it worked
The test runner exits 0 with 0 failing tests, and `reorder.js` prints a clean supplier-grouped WhatsApp message with no `NaN` or `undefined` entries.

Ran: 2026-11-24 -- `node --test workspace/stock-tools/reorder.test.js` passed (# skipped 0 # todo 0 # duration_ms 191.986905 )
