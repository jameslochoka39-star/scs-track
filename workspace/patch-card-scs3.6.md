# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: `reorderList` in `workspace/stock-tools/reorder.js` uses `<` instead of `<=`, omitting items whose current stock equals their reorder threshold.
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change the comparison in `reorderList` (`workspace/stock-tools/reorder.js` line 23) so items with `In stock` less than or equal to (`<=`) `Reorder at` are included.
The test that shows the bug (input -> expected): CSV row `Grinding discs 115 mm,Gas and welding supplier,20,20,pieces` -> `reorderList` returns `["Grinding discs 115 mm"]`.
The prompt, word for word: `In workspace/stock-tools/reorder.js, change reorderList on line 23 so items at or below their reorder level (<=) are returned instead of strictly below (<). Do not change any other functions.`

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| 23 | Changed `<` to `<=` in `parseInt(r["In stock"], 10) <= parseInt(r["Reorder at"], 10)` | Yes | Kept as patched |
| 24-25 | Added `rows.sort((a, b) => a.Item.localeCompare(b.Item))` mutating input array | BEYOND | Removed in adjustment commit so `reorderList` preserves CSV order and does not mutate input |

Tests before the patch: 5 passing, 1 failing (`includes items equal to their reorder level` failed: `[] !== ['Grinding discs 115 mm']`)
Tests after the patch: 6 passing, 0 failing
Tests after my adjustment: 6 passing, 0 failing
Commits on scs3.6-patch (the test, the patch, the adjustment):
1. `Test: items at exact reorder level should be included`
2. `Patch: include items at reorder level (AI-assisted, directed by lochoka)`
3. `Adjust: remove unrequested sort outside spec`

## Receipt

1. Label: AI-assisted, directed by lochoka
2. Tool and tier: Gemini (free/standard web tier)
3. Spec and prompt: above, word for word
4. Tests or checks: `node --test workspace/stock-tools/reorder.test.js` (6/6 passing)
5. Rights line: Client retains rights to the stock-tools code and patch; AI output verified and adjusted by lochoka.
6. Cost: KSh 0 (free tier; usage page not shown on tier)
