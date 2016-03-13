//redis连接池
var redis = require('redis');
var generic_pool = require('generic-pool');

var redisPool = generic_pool.Pool({
    name: 'redis-pool',
    create: function (callback) {
        var client = redis.createClient('6379', '127.0.0.1');
        client.on('error', function (err) {
            console.error('error at connect redis: %s', err.stack);
        });
        callback(null, client);
    },
    destroy: function (client) {
        client.quit();//当超时则释放连接
    },
    max: 10,   //最大连接数
    idleTimeoutMillis: 1000,  //超时时间
    log: true //是否显示日志
});

module.exports = redisPool


