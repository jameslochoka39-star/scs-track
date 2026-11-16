# The Rent Card — What to Rent for What

## The need

- Kind of site: A small business website with information about services and contact details.
- Visitors a day: 20 visitors, based on the estimate recorded in FC1.
- Budget: KSh 2,000 per month.

## Measured

- CPU processors (`nproc`): 8.
- Memory (`free -m`): 15,869 MB total, 15,329 MB free and 15,314 MB available.
- System uptime (`uptime`): 3 minutes at the time of measurement.
- Disk space (`df -h`): Main Linux filesystem `/dev/sdd`: 1007G total, 2.9G used and 953G available.
- Machine architecture (`uname -m`): x86_64.
- Measurement time (`date`): 16 November 2026, 15:18 EAT.

## What to rent for what

| Website need                                        | Suitable option                                                                     | Reason                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --- |
| A simple website that does not need a server        | Amazon S3 static website hosting                                                    | It can host static HTML, CSS and image files without renting a virtual server.                     |
| A small business website                            | Amazon Lightsail $5 Linux plan (aws.amazon.com/lightsail/pricing, read 2026-11-16)  | It provides a simple starting server for a small website.                                          |     |
| A small website that needs a small EC2 server       | EC2 t3.micro or t4g.micro                                                           | These are small virtual server options. t3 uses x86 architecture, while t4g uses ARM architecture. |
| A small WordPress website                           | Amazon Lightsail $7 Linux plan (aws.amazon.com/lightsail/pricing, read 2026-11-16)  | It provides resources for a small WordPress website.                                               |     |
| A website with more plugins and a product catalogue | Amazon Lightsail $12 Linux plan (aws.amazon.com/lightsail/pricing, read 2026-11-16) | It provides more resources for a larger website.                                                   |
| Never for a small client                            | An m-class EC2 instance or a GPU instance                                           | These are larger or specialised options and may cost more than this small website needs.           |
| Learning and staging                                | The existing scs-server training VM                                                 | It can be used for learning and testing without renting another AWS server.                        |

## My choice

I recommend the Amazon Lightsail $5 Linux plan. The client needs a simple business website with service information and contact details and expects about 20 visitors per day. This is a reasonable starting option for the site's needs and budget.

## Why not bigger, why not smaller

- Why not bigger: I would not choose a larger plan because the site expects only 20 visitors per day and the client's budget is KSh 2,000 per month. A more expensive plan would use more of the client's budget without a demonstrated need.
- Why not smaller: A smaller or static-only hosting option may not support a website that needs server-side features or a content management system such as WordPress. If the client only needs static HTML pages, a static hosting option such as S3 could be considered instead.

## Prices

- Lightsail Linux plan: $5 USD per month, with 0.5 GB memory, 2 vCPUs, 20 GB SSD and 1 TB transfer. Source: https://aws.amazon.com/lightsail/pricing/, read 2026-11-16. Price must be confirmed in the course sandbox region.
- Exchange rate: 1 USD = 129.96 KES. Source: Central Bank of Kenya, https://www.centralbank.go.ke/, read 2026-11-16. Verify this rate against the published rate.
- Converted monthly cost: $5 USD × 129.96 = KSh 649.80 per month, before applicable taxes or additional charges. Calculation uses the exchange rate above, read 2026-11-16.

## Lightsail or EC2 for this client

I choose Lightsail because it is simpler to set up and manage and has predictable monthly plan pricing. This is a better starting choice for a small business website than configuring an EC2 server.
