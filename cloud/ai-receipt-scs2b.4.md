# AI Receipt — SCS2b.4

## 1. The specification

The client needs a small business website with information about services and contact details. The estimated traffic is 20 visitors per day and the budget is KSh 2,000 per month.

## 2. What I asked AI

I asked AI to help compare AWS hosting options, understand the costs, and choose a suitable option for the client's website.

## 3. Three options considered

1. Amazon S3 static website hosting — suitable if the website only needs static pages and does not need a server.
2. Amazon Lightsail $5 Linux plan — a simple starting server for the client's small website.
3. Amazon EC2 t3.micro — provides more control but requires more server configuration.

## 4. Numbers and sources checked

- Lightsail price considered: $5 USD per month. Source: https://aws.amazon.com/lightsail/pricing/. Verify the price for the course sandbox region and record the date checked.
- Lightsail resources considered: 0.5 GB memory, 2 vCPUs, 20 GB SSD and 1 TB transfer. Source: AWS Lightsail Pricing page.
- Exchange rate used: 1 USD = 129.96 KES. Source: Central Bank of Kenya. Verify the published rate and date.
- EC2 t3.micro price: Check https://aws.amazon.com/ec2/pricing/on-demand/ for the sandbox region and write the exact price and date checked.

## 5. My decision

I chose Amazon Lightsail as the starting option because it is simpler to manage and offers predictable monthly pricing. I must confirm that its regional price fits the client's KSh 2,000 monthly budget before making the final recommendation.

## 6. Partner's challenge

My partner asked how I know that Lightsail is the right choice. I will support my answer by comparing the client's needs, measured resources and prices on the official AWS pricing pages.

## 7. Three what-if questions

1. What if the website receives more visitors than expected? I would review its resource usage and consider a larger plan if necessary.
2. What if the client needs WordPress? I would check whether the selected plan has enough memory and storage for WordPress.
3. What if the client only needs static HTML pages? I would consider Amazon S3 because a virtual server may not be necessary.
