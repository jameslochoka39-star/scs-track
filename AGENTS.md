# Repository Rules

## Stack
- Node.js v22 (`node:test` and `node:assert` built-in test runner, zero external npm packages)
- Vanilla CommonJS JavaScript (`workspace/stock-tools/*.js`) and CSV exports (`stock-export.csv`)
- Google Apps Script V8 (`workspace/automation/*.gs`) and Markdown documentation

## Tests
- Run `node --test workspace/stock-tools/reorder.test.js` before and after every change to `workspace/stock-tools/`.
- Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` to verify CLI output against sample data.

## Never
- Never hardcode API keys, phone numbers, or tokens in source files; always read from `process.env`.
- Never use `Object.groupBy` or unverified `node:http` helpers like `fetchWithRetry`; stick to standard Node LTS features.
- Never silently drop rows with blank stock quantities or split quoted CSV fields with a naive `.split(",")`.
- Never modify files outside `workspace/stock-tools/` during scoped stock-tool tasks, and never include real client names, staff, or customer data in this public repo.
