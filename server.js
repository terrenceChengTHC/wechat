#!/usr/bin/env node
var debug = require('debug');
var app = require('./app');

app.set('port', process.env.PORT || 443);

var server = app.listen(app.get('port'), function() {
    console.log('微信公众号服务启动端口: ' + server.address().port);
    debug('微信公众号服务启动端口: ' + server.address().port);
});
