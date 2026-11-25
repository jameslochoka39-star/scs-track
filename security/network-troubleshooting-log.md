# Network troubleshooting log -- SCS4.1

Date: 2026-11-25
Station: <your kit station label, e.g., Station 2>

The fair copy of the paper log. The kit station is the SA team's isolated lab network, never the campus.
Nothing private here: no passwords, no public addresses, no client's name.
The rules: the guess before the first swap. Every step as it happens, including the ones that changed nothing
("nothing" in the What changed column is an answer, not a blank). Put it back. The SA initials the paper log
only after the put-back is checked.

## Fault 1 -- station fault

Symptom (the owner's words): <what the owner said happened>
My guess (device, cable or network): <device or cable or network>
The rung I expected to fail: <1-6>

| Step | What I did (one swap or one look)     | What changed                | Rung  |
| ---- | ------------------------------------- | --------------------------- | ----- |
| 1    | <first check or swap from paper log>  | nothing                     | <1-6> |
| 2    | <second check or swap from paper log> | <what changed after step 2> | <1-6> |
| 3    |                                       |                             |       |
| 4    |                                       |                             |       |
| 5    |                                       |                             |       |
| 6    |                                       |                             |       |

The rung that failed: <1-6>
The fault was: <actual fault found>
Fixed by: <what fixed it>
Put back: <how original cabling/state was restored>
SA initialled the paper log (yes / not yet): <yes or not yet>

## Fault 2 -- station fault

Symptom (the owner's words): <what the owner said happened>
My guess (device, cable or network): <device or cable or network>
The rung I expected to fail: <1-6>

| Step | What I did (one swap or one look)     | What changed              | Rung  |
| ---- | ------------------------------------- | ------------------------- | ----- |
| 1    | <first check or swap from paper log>  | <what changed or nothing> | <1-6> |
| 2    | <second check or swap from paper log> | <what changed or nothing> | <1-6> |
| 3    |                                       |                           |       |
| 4    |                                       |                           |       |
| 5    |                                       |                           |       |
| 6    |                                       |                           |       |

The rung that failed: <1-6>
The fault was: <actual fault found>
Fixed by: <what fixed it>
Put back: <how original cabling/state was restored>
SA initialled the paper log (yes / not yet): <yes or not yet>

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): <12 chars from head -1 ~/scs-faults/guess-\*.txt, or blank if missing>
Card number (after the reveal): <27-30>
Symptom (the owner's words, as my partner said it): <symptom from partner>
My guess (device, cable or network): <device or cable or network>
The rung I expected to fail: <1-6>
My break.sh guess in one line (written before the reveal): <one-line guess>

| Step | What I did (one swap or one look)    | What changed              | Rung  |
| ---- | ------------------------------------ | ------------------------- | ----- |
| 1    | <first check or swap on lab device>  | <what changed or nothing> | <1-6> |
| 2    | <second check or swap on lab device> | <what changed or nothing> | <1-6> |
| 3    |                                      |                           |       |
| 4    |                                      |                           |       |
| 5    |                                      |                           |       |
| 6    |                                      |                           |       |

The rung that failed: <1-6>
The fault was: <actual fault on card>
Fixed by: <what fixed it>
Proved on the lab device with the ladder (the rungs that passed after the fix): <rungs that passed after fix>
Put back (the undo line break.sh printed, done by hand and checked): <undo action and check>
SA initialled the paper log (yes / not yet): <yes or not yet>
Was my guess right, and what did the reveal add: <whether guess matched and extra detail revealed>

## The card I planted -- I was the partner

Card number: <card number planted>
The step break.sh printed, done by hand on the lab device (in my words, no passwords): <action taken on lab device>
The undo, done by hand after the fixer finished, and how we checked it: <undo and verification>
The first thing my partner's log got right: <what partner logged accurately first>
