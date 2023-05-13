module.exports.port = process.env['PORT'] || 80;
module.exports.redisUrl = process.env['REDIS_URL'];
module.exports.queues = process.env['QUEUES'].split(',');
