var crypto = require("crypto");
var Q = require('q');

//for validating adminUser have login or not
var validate = function (req, res, next) {
    var regExp = /[/admin]{6}/;
    regExp.test(req.originalUrl);
    if (regExp.test(req.originalUrl) && req.originalUrl != "/admin/loginCheck") {
        var cookies = req.headers.cookie;
        console.log(cookies);
        res.render('admin/login', {title: '登录'});
    } else {
        next();
    }
}

//for adminUser to login
var adminLogin = function (req, res, next, callback) {
    if (req.body.account == 'admin' && req.body.pwd == 'admin') {
        //set login token
        callback;
        return {cd: 1, msg: "登陆成功"};
    } else {
        return {cd: 0, msg: "登陆失败，用户或密码错误"};
    }
}

module.exports.validate = validate;
module.exports.adminLogin = adminLogin;