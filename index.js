const express = require('express');
const {Queue} = require('bullmq');
const {createBullBoard} = require('@bull-board/api');
const {BullMQAdapter} = require('@bull-board/api/bullMQAdapter');
const {ExpressAdapter} = require('@bull-board/express');
const Redis = require('ioredis');
const {port, redisUrl, queues} = require('./env');

const redis = new Redis(redisUrl);

const serverAdapter = new ExpressAdapter();

const {addQueue, removeQueue, setQueues, replaceQueues} = createBullBoard({
    queues: queues.map(name => new BullMQAdapter(new Queue(name, {connection: redis}))),
    serverAdapter: serverAdapter,
});

const app = express();

app.use(serverAdapter.getRouter());

app.listen(port, () => {
    console.log(`For the UI, open http://localhost:${port}`);
    console.log('Make sure Redis is running on port 6379 by default');
});
