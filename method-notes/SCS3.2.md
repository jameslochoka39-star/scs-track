# Method note -- SCS3.2

## 1. What I set out to do

I set out to practise securing Drive sharing, enforcing 2-Step Verification and device settings, running restore drills, and offboarding a user safely.

## 2. What I did, in order

I updated the sharing and retention policy, restricted external Drive sharing, enforced 2-Step Verification with paper backup codes, configured mobile device rules, ran four restore tests, transferred Drive ownership, and suspended the leaver account.

## 3. What went wrong, and how I fixed it

Some evidence exports required Google Admin console access and Drive audit logs had a propagation delay. I organised my local evidence folders, recorded every step in the change log before clicking, and requested the official CSV exports from the lab administrator.

## 4. How long it took, against the plan

The work took longer than planned because checking the policy corrections, documenting all four restore drills, and verifying the audit logs required extra time.

## 5. One lesson for the next person

Always write the change-log row before making the change in the console, and always transfer Drive ownership before suspending the leaver's account.

## 6. What I might be wrong about, and how I would find out

I might be wrong about whether any legacy public sharing links or orphaned files owned by the leaver outside the main shared folder were missed, and I would find out by checking the full Drive audit log filtered by the leaver's email across all dates.
