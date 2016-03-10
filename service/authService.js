var crypto = require("crypto");

var check = function(req, res, next){
    var regExp = /[/admin]{6}/;
    regExp.test(req.originalUrl);
    if(regExp.test(req.originalUrl)){
        res.render('admin/login',{title:'登录'});
    }else{
        next();
    }
}

module.exports = check;