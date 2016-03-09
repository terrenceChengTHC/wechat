var express = require('express');
var url = require("url");
var router = express.Router();

/* wechat invalidate access */
router.get('/', function (req, res, next) {
    console.log(req);
});

router.get('/login', function (req, res, next) {
    res.render('admin/login',{title:'登录'})
});

router.get('/manage', function (req, res, next) {
    res.render('admin/manage',{title:'系统管理',target:'manage'})
});

router.get('/customMenu', function (req, res, next) {
    res.render('admin/customMenu',{title:'自定义菜单',target:'customMenu'})
});

module.exports = router;
