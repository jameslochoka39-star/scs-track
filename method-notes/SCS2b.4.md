# SCS2b.4 Method Note

## 1. What I set out to do

I wanted to measure my computer's resources and understand the system information using Linux commands.

## 2. What I did, in order

1. Opened my Ubuntu terminal.
2. Ran `nproc` to check the number of processors.
3. Ran `free -m` to check memory.
4. Ran `uptime` to check system uptime.
5. Ran `df -h` to check disk space.
6. Ran `uname -m` to check machine architecture.
7. Ran `date` to check the current date and time.

## 3. What went wrong, and how I fixed it

I initially had difficulty finding where to put my method note. I created the `SCS2b.4.md` file inside the `method-notes` folder using VS Code.

## Measured

### 1. CPU processors

Command: `nproc`

```text
8
```

### 2. Memory

Command: `free -m`

```text
               total        used        free      shared  buff/cache   available
Mem:           15869         554       15329           4         179       15314
Swap:           4096           0        4096
```

### 3. System uptime

Command: `uptime`

```text
15:18:15 up 3 min, 1 user, load average: 0.15, 0.11, 0.05
```

### 4. Disk space

Command: `df -h`

```text
Filesystem      Size  Used Avail Use% Mounted on
none            7.8G     0  7.8G   0% /usr/lib/modules/6.18.58.1-microsoft-standard-WSL2
/dev/sdb         97M   97M     0 100% /usr/src/linux-headers-6.18.58.1-microsoft-standard-WSL2
none            7.8G  4.0K  7.8G   1% /mnt/wsl
drivers         476G  101G  375G  22% /usr/lib/wsl/drivers
/dev/sdd       1007G  2.9G  953G   1% /
none            7.8G   32K  7.8G   1% /mnt/wslg
none            7.8G     0  7.8G   0% /usr/lib/wsl/lib
rootfs          7.8G  3.4M  7.8G   1% /init
none            7.8G  520K  7.8G   1% /run
none            7.8G     0  7.8G   0% /run/lock
none            7.8G     0  7.8G   0% /run/shm
none            7.8G   80K  7.8G   1% /mnt/wslg/versions.txt
none            7.8G   80K  7.8G   1% /mnt/wslg/doc
C:\             476G  101G  375G  22% /mnt/c
none            1.0M     0  1.0M   0% /run/credentials/systemd-journald.service
tmpfs           7.8G     0  7.8G   0% /tmp
none            1.0M     0  1.0M   0% /run/credentials/systemd-resolved.service
none            1.0M     0  1.0M   0% /run/credentials/getty@tty1.service
tmpfs           1.6G   12K  1.6G   1% /run/user/1000
```

### 5. Machine architecture

Command: `uname -m`

```text
x86_64
```

### 6. Date and time

Command: `date`

```text
Mon Nov 16 15:18:51 EAT 2026
```
