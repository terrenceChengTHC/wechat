var express = require('express');
var url = require("url");
var router = express.Router();

/* wechat invalidate access */
router.get('/', function (req, res, next) {
    res.render('index',{title:'主页'})
});

module.exports = router;
