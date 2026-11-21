# Instance Log — SCS2b.3 Your First Instance

- **Trainee:** lochoka
- **Region:** af-south-1
- **Instance:** `i-0a1b2c3d4e5f60001` (`Name=lochoka-first-instance`, `Owner=lochoka`, `t3.micro`, Ubuntu Server 24.04 LTS)
- **Security Group:** `sg-0123456789abcdef0` (`Name=lochoka-web-sg`, `Owner=lochoka`) — TCP 22 from `129.222.147.183/32`, TCP 80 and 443 from `0.0.0.0/0`
- **Key Pair:** `lochoka-key` imported from `~/.ssh/id_ed25519.pub`

## Stage 1: Launch & Security Group ("The Wall")
- **Typed:** Verified SSH key permissions (`600`), configured security group inbound rules (`22` restricted to campus CIDR `129.222.147.183/32`; `80` and `443` open to `0.0.0.0/0`), and launched `t3.micro` Ubuntu 24.04 LTS tagged `Owner=lochoka`.
- **Expected:** Instance enters `running` state with attached EBS volume tagged `Owner=lochoka` and `Name=lochoka-first-instance-disk`.
- **Seen:** Instance running with public endpoint reachable; port 22 accepts SSH only from campus CIDR while port 443 returns connection refused (wall open, no TLS listener yet).

## Stage 2: SSH Access & Nginx Web Server
- **Typed:** `ssh -i ~/.ssh/id_ed25519 ubuntu@127.0.0.1` followed by `sudo apt install -y nginx` and deploying site HTML into `/var/www/html/`.
- **Expected:** Host key fingerprint verified on first login, `nginx` starts on port 80, and `curl -I http://127.0.0.1/` returns `HTTP/1.1 200 OK` with `Server: nginx`.
- **Seen:** SSH connected cleanly via ed25519 key without password, and `http://127.0.0.1/` served the custom HTML site over HTTP port 80 instead of the default Nginx welcome page.

## Stage 3: Stop & End-of-Day State
- **Typed:** Stopped the instance at end of block (`state=stopped`) rather than terminating it so the disk and setup remain ready for SCS2b.4.
- **Expected:** Instance state becomes `stopped`, compute billing stops, and EBS volume persists.
- **Seen:** Instance confirmed in `stopped` state with zero extra resources or unattached volumes left running.
