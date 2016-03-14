var express = require('express');
var url = require("url");
var auth = require('../service/authService');
var router = express.Router();

/* wechat invalidate access */
router.get('/', function (req, res, next) {
    console.log(req);
});

router.get('/login', function (req, res, next) {
    res.render('admin/login', {title: '登录'})
});

router.post('/loginCheck', function (req, res, next) {
    try {
        var result = auth.adminLogin(req, res, next, function (token) {
            //res.cookie('name', req.body.account, {maxAge:600000, httpOnly:true, path:'/', secure:true});
            //res.cookie('token', '1234567', {maxAge:600000, httpOnly:true, path:'/', secure:true});
            res.cookie('name', req.body.account);
            res.cookie('token', token);
        });
        res.json({title: '登录', res: result});
    } catch (err) {
        console.log(err);
    }
});

router.get('/logout', function (req, res, next) {
    auth.adminLogout(req, res, next);
    res.render('admin/login', {title: '登录'})
});

router.get('/manage', function (req, res, next) {
    res.render('admin/manage', {title: '系统管理', target: 'manage'})
});

router.get('/customMenu', function (req, res, next) {
    res.render('admin/customMenu', {title: '自定义菜单', target: 'customMenu'})
});

module.exports = router;
