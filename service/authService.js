var cookie = require('cookie');
var redisPool = require('../models/redis/redisPool');
var randomWord = require('../util/randomWord');

var redis_username_sub = 'userName_';

//for validating adminUser have login or not
var validate = function (req, res, next) {
    var regExp = /[/admin]{6}/;
    regExp.test(req.originalUrl);
    if (regExp.test(req.originalUrl) && req.originalUrl != "/admin/loginCheck" && req.originalUrl != "/admin/login") {
        var cookies = cookie.parse(req.headers.cookie);
        redisPool.acquire(function (err, client) {//获取redis线程
            if (err) {
                console.log('pool acquire error');
                res.render('admin/login', {title: '登录'});
            }
            else {
                client.get(redis_username_sub + cookies.name, function (err, reply) {
                    redisPool.release(client);//释放资源
                    if (reply != '' && cookies.token == reply) {
                        next();
                    } else {
                        res.render('admin/login', {title: '登录'});
                    }
                });

            }
        });
    } else {
        next();
    }
}

//for adminUser to login
var adminLogin = function (req, res, next, callback) {
    if (req.body.account == 'admin' && req.body.pwd == 'admin') {
        //set login token
        var token = 'dsafdafdfhgfhtrewq';
        redisPool.acquire(function (err, client) {//获取redis线程
            if (err) {
                console.log('pool acquire error');
            }
            else {
                var cookies = cookie.parse(req.headers.cookie);
                client.set(redis_username_sub + cookies.name, token);//保存登录token
                redisPool.release(client);//释放资源
                callback(token);
            }
        });
        return {cd: 1, msg: "登陆成功"};
    } else {
        return {cd: 0, msg: "登陆失败，用户或密码错误"};
    }
}

var adminLogout = function (req, res, next) {
    redisPool.acquire(function (err, client) {//获取redis线程
        if (err) {
            console.log('pool acquire error');
        }
        else {
            var cookies = cookie.parse(req.headers.cookie);
            client.del(redis_username_sub + cookies.name);//保存登录token
            redisPool.release(client);//释放资源
        }
    });
}

module.exports.validate = validate;
module.exports.adminLogin = adminLogin;
module.exports.adminLogout = adminLogout;