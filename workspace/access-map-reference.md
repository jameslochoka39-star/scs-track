# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why? One row per person, or per identical job.

Groups are people; units are settings; every person is in one unit and may belong to many groups.

| Person (job)         | What the job needs                      | OU                   | Groups                      | Admin role            | Why (one line)                                                                                                        |
| -------------------- | --------------------------------------- | -------------------- | --------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| The owner            | Full business management                | /Shop/Management     | management@shop.example     | Super Admin           | Needs full control to manage the business; giving this role to others risks company data and settings; owner decides. |
| The accountant       | Accounting and financial records        | /Shop/Office         | accounts@shop.example       | none                  | Needs access to financial records; extra access risks staff and system settings; owner decides.                       |
| The shop manager     | Manage staff and daily operations       | /Shop/Management     | management@shop.example     | User Management Admin | Needs to manage staff accounts; wider access risks security settings; owner decides.                                  |
| Counter staff (four) | Serve customers and manage counter work | /Shop/Front Desk     | counter@shop.example        | none                  | Need access to counter information; extra access risks private business records; shop manager decides.                |
| The new starter      | Front desk duties and training          | /Shop/Front Desk     | counter@shop.example        | none                  | Needs access to learn and perform assigned duties; extra access risks customer information; shop manager decides.     |
| Welders (three)      | Welding jobs and workshop information   | /Shop/Workshop       | workshop@shop.example       | none                  | Need access to workshop information; extra access risks office and customer records; shop manager decides.            |
| Drivers (two)        | Delivery schedules and routes           | /Shop/Deliveries     | drivers@shop.example        | none                  | Need access to delivery information; extra access risks financial and staff records; shop manager decides.            |
| Me (the admin)       | Set up accounts and maintain systems    | /Shop/Administration | administrators@shop.example | none                  | Needs administrative access for setup; extra access risks the whole business; owner authorises.                       |

## The partner's cold read

Partner: To be completed by partner.

One person with more than the job needs, or "none" and why: To be completed by partner.
