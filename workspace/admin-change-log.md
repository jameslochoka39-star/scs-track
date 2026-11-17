| #   | Ticket           | Logged at | What I am about to change (console path)                                      | Who or what it affects                                         | Why                                                                                                                       | How I checked it                                                                       | Audit log    |
| --- | ---------------- | --------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------ |
| 1   | 1 New starter    | 10:50     | Admin console > Directory > Users > Add new user                              | amina.otieno@<sandbox domain>, new starter               | The job needs a work account for the new starter, extra access risks company information, the owner decided               | Checked that Amina appears in the users list                                           | 10:50:12 UTC |
| 2   | 1 New starter    | 10:51     | Admin console > Directory > Users > Add new user                              | david.kamau@<sandbox domain>, new starter                | The job needs a work account for the new starter, extra access risks company information, the owner decided               | Checked that David appears in the users list                                           | 10:51:04 UTC |
| 3   | 2 Groups         | 10:55     | Admin console > Directory > Groups > Create group                             | counter@<sandbox domain>, counter staff                  | The job needs one shared address for shift rotas, wider access could expose management email, the shop manager decided    | Checked that the Counter group appears in the groups list                              | 10:55:34 UTC |
| 4   | 3 Units          | 11:00     | Admin console > Directory > Organizational units > Create organizational unit | Front Desk under /Trainees/lochoka/Staff                       | The job needs Chat turned off for counter staff only, changing the wrong unit could affect other staff, the owner decided | Checked that Front Desk appears under the correct parent unit                          | 11:00:08 UTC |
| 5   | 4 Delegated role | 11:05     | Admin console > Account > Admin roles > Assign users                          | accountant@<sandbox domain>, Password Reset Admin        | The job needs password resets for staff, full administrator access risks billing and data deletion, the owner decided     | Checked the accountant's assigned roles in the admin console                           | 11:05:45 UTC |
| 6   | 5 Rollback       | 11:10     | Admin console > Account > Admin roles > Unassign users                        | accountant@<sandbox domain>, remove Password Reset Admin | The job no longer needs elevated access, keeping the role risks unauthorized account changes, the trainer decided         | Checked that Password Reset Admin no longer appears in the accountant's assigned roles | 11:10:19 UTC |

# Admin change log -- SCS3.1

Date: 2026-11-17  
Sandbox admin sign-in: lochoka@<sandbox domain>  
My unit: /Trainees/lochoka  
Naming convention: first.last

One row per admin action, written BEFORE the click. A ticket may take several rows; add them as you go.

## Gaps

- The audit log records two user creations and one group creation.
- The audit log records Front Desk under /Trainees/lochoka/Staff.
- All six audit events are listed above.
