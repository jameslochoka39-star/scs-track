1. Running the four checks before patching caught real silent data loss (blank stock cells and quoted CSV commas) that the existing green test suite missed.
2. Writing the failing test and one-sentence spec before prompting kept the patch small and made it obvious when the AI added an unrequested sort.
3. Removing the hardcoded SMS API key by hand before touching any AI tool kept credentials completely out of prompts and logs.
4. Putting project-specific `## Never` rules in `AGENTS.md` turned today's audit findings into guardrails the agent respected on its branch.
5. Logging each agent step live on `main` while isolating edits on `scs3.6-agent` made it easy to reject an out-of-scope file edit before merging with `--no-ff`.
6. Least carefully checked on my own patch: wrong versions (Node LTS compatibility) and negative/non-numeric stock inputs; a test running `reorder.js` under Node 18 LTS and passing negative or text quantities like `"N/A"` would tell me immediately.
