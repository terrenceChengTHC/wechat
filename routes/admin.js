var express = require('express');
var url = require("url");
var crypto = require("crypto");
var router = express.Router();

/* wechat invalidate access */
router.get('/login', function (req, res, next) {
    res.render('admin/login',{title:'登录'})
});

module.exports = router;
