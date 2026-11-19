1. I started by mapping the daily cash and credit transactions for the business before opening Google Sheets.
2. Separating raw entries (`Records`), lookup dropdowns (`Lists`), and summary metrics (`Dashboard`) kept formulas clean and prevented accidental overwrites.
3. Testing validation rules with invalid text and negative numbers caught edge cases that would have broken the monthly sums.
4. Writing the hand-check log forced me to verify every formula manually against raw rows, revealing a date-filter bug early.
5. Keeping client names and phone numbers strictly inside the local evidence folder ensured the public GitHub repo stayed clean.
6. What I might be wrong about is whether the attendant will consistently log credit transactions during busy hours; I would find out by comparing the sheet's weekly cash total against the physical cash box count every Friday.
