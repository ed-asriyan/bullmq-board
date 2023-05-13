# BullMq board
Board for [BullMQ](https://docs.bullmq.io).

## How to use
Add to docker-compose:
```yaml
  admin:
    build:
      context: https://github.com/ed-asriyan/bullmq-board.git
    depends_on:
      redis-queue:
        condition: service_healthy
    environment:
      - REDIS_URL=<redis url>
      - QUEUES=<name of queues separated by comma. e.g. file-convert,upload,accept-payment>
    ports:
      - "<external_port>:80"
```

