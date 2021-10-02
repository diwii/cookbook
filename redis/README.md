# Redis
Redis is an in-memory database (a database that keeps the dataset in RAM) which periodically stores data back to disks. This makes Redis ideal as a cache system: the data is structured, its latency is lower and throughput is higher than data stored in disks, while still offers data persistent (compared to Memcache which doesn’t save data to disk by default).

# Installation

`apt-get install redis`

# Redis commands

**MONITOR** is a debugging command that streams back every command processed by the Redis server

`redis-cli monitor`

**FLUSHALL** Delete all the keys of all the existing databases, not just the currently selected one.

`redis-cli flushall`
