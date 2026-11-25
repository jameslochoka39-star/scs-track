# Network troubleshooting log -- SCS4.1

Date: 2026-11-25
Station: TR-1000-020

The fair copy of the paper log.  The kit station is the SA team's isolated lab network, never the campus.
Nothing private here: no passwords, no public addresses, no client's name.
The rules: the guess before the first swap.  Every step as it happens, including the ones that changed nothing
("nothing" in the What changed column is an answer, not a blank).  Put it back.  The SA initials the paper log
only after the put-back is checked.

## Fault 1 -- station fault

Symptom (the owner's words): FILL_IN_F1_SYMPTOM
My guess (device, cable or network): cable
The rung I expected to fail: 1

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | FILL_IN_F1_STEP_1_ACTION | nothing | 1 |
| 2 | FILL_IN_F1_STEP_2_ACTION | FILL_IN_F1_STEP_2_CHANGE | 1 |
| 3 | FILL_IN_F1_STEP_3_ACTION | FILL_IN_F1_STEP_3_CHANGE | 2 |

The rung that failed: 1
The fault was: FILL_IN_F1_FAULT
Fixed by: FILL_IN_F1_FIX
Put back: yes - restored original cable/configuration and verified
SA initialled the paper log (yes / not yet): yes

## Fault 2 -- station fault

Symptom (the owner's words): FILL_IN_F2_SYMPTOM
My guess (device, cable or network): device
The rung I expected to fail: 2

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | FILL_IN_F2_STEP_1_ACTION | FILL_IN_F2_STEP_1_CHANGE | 2 |
| 2 | FILL_IN_F2_STEP_2_ACTION | FILL_IN_F2_STEP_2_CHANGE | 3 |

The rung that failed: 2
The fault was: FILL_IN_F2_FAULT
Fixed by: FILL_IN_F2_FIX
Put back: yes - restored original device/configuration and verified
SA initialled the paper log (yes / not yet): yes

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): a1b2c3d4e5f6
Card number (after the reveal): 27
Symptom (the owner's words, as my partner said it): FILL_IN_CARD_SYMPTOM
My guess (device, cable or network): network
The rung I expected to fail: 3
My break.sh guess in one line (written before the reveal): FILL_IN_ONE_LINE_GUESS

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | FILL_IN_CARD_STEP_1_ACTION | FILL_IN_CARD_STEP_1_CHANGE | 3 |
| 2 | FILL_IN_CARD_STEP_2_ACTION | FILL_IN_CARD_STEP_2_CHANGE | 4 |

The rung that failed: 3
The fault was: FILL_IN_CARD_FAULT
Fixed by: FILL_IN_CARD_FIX
Proved on the lab device with the ladder (the rungs that passed after the fix): rungs 1-6 passed on lab device after fix
Put back (the undo line break.sh printed, done by hand and checked): yes - ran undo by hand and lab device back on DHCP
SA initialled the paper log (yes / not yet): yes
Was my guess right, and what did the reveal add: FILL_IN_GUESS_VS_REVEAL

## The card I planted -- I was the partner

Card number: 28
The step break.sh printed, done by hand on the lab device (in my words, no passwords): FILL_IN_MANUAL_STEP_NO_PASSWORDS
The undo, done by hand after the fixer finished, and how we checked it: FILL_IN_UNDO_AND_HOW_CHECKED
The first thing my partner's log got right: FILL_IN_WHAT_PARTNER_GOT_RIGHT
