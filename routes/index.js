var express = require('express');
var url = require("url");
var crypto = require("crypto");
var router = express.Router();

/* wechat invalidate access */
router.get('/', function (req, res, next) {
    res.render('index',{title:'我的淘米u 啊'})
});

module.exports = router;
