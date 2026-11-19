## Overkill test
| Question | Client's Answer |
| --- | --- |
| 1. How many transactions per week? | Around 25–40 boda rides and phone charging sessions per week. |
| 2. How many people enter data? | Two people (the owner and one attendant). |
| 3. Does it need real-time stock or multi-branch sync? | No, single shop location in Lokichoggio. |
| 4. Will the owner maintain it without a developer? | Yes, using simple dropdowns and a read-only summary tab. |
| 5. What happens if the internet drops for a day? | Offline mobile access in Google Sheets queues edits until connection returns. |

Verdict: Sheets.  Pattern: invoicing.  Because: Transaction volume is under 50 per week, only two staff enter records, and simple dropdowns prevent entry errors without needing paid accounting software.

## Validation
| Column | Rule | The garbage I typed | Refused? |
| --- | --- | --- | --- |
| Date | Valid date | `not-a-date` | Yes |
| Service Type | List from range (`Lists!A2:A10`) | `Free Ride` | Yes |
| Amount (KES) | Number greater than 0 | `-500` | Yes |
| Payment Status | List of items (`Paid, Unpaid`) | `Maybe` | Yes |

## Protection
| Range | Who can edit | Warning or restriction | Entry columns still open? |
| --- | --- | --- | --- |
| Dashboard!A1:Z50 | Only me (Owner) | Restriction (block others) | Yes (`Records` tab remains editable) |
| Lists!A1:D20 | Only me (Owner) | Restriction (block others) | Yes (`Records` tab remains editable) |

## AI receipts
| The ask (headings only) | The formula | What I changed | The hand check (the log row) |
| --- | --- | --- | --- |
| Columns: Date, Service, Amount, Status. Give a Google Sheets formula to sum Amount where Status is Paid for the current month. | `=SUMIFS(Records!C2:C, Records!D2:D, "Paid", Records!A2:A, ">="&EOMONTH(TODAY(),-1)+1)` | Replaced `TODAY()` with a cell reference to the Dashboard As-Of Date (`B2`) so historical checks stay accurate. | Log row 2 |

## Break the books
| The attack | What I said would happen | What happened | Held or the fix |
| --- | --- | --- | --- |
| 1. Type text into the Amount column | Validation will reject non-numeric input | Pop-up blocked entry | Held |
| 2. Enter a negative payment amount | Validation (> 0) will block it | Pop-up blocked entry | Held |
| 3. Type a service not on the Lists tab | Strict dropdown will reject unknown items | Pop-up blocked entry | Held |
| 4. Overwrite a Dashboard total cell as a staff user | Range protection will block edits | Edit was blocked | Held |
| 5. Enter a future date past the As-Of Date | Formula might accidentally include next month's sales | Formula included the future row | Fix: Added `<= $B$2` upper bound to `SUMIFS` |
| 6. Delete a formula row instead of adding a reversal row | Ledger balance would break silently | Row deletion shifted references | Fix: Locked header rows and trained user on ledger reversal rows |
| 7. Leave Payment Status blank on a new row | Unpaid total might miss blank rows | Blank row was excluded from both Paid and Unpaid | Fix: Set Payment Status validation to reject blank/invalid values and added an "Incomplete Rows" flag on Dashboard |
