/**
 * 微信菜单对象
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var WechatMenuSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name: String,//菜单标题，不超过16个字节，子菜单不超过40个字节
    type: String,//菜单的响应动作类型
    key: String,//click等点击类型必须,菜单KEY值，用于消息接口推送，不超过128字节
    url: String,//view类型必须,网页链接，用户点击菜单可打开链接，不超过256字节
    media_id: String,//media_id类型和view_limited类型必须,调用新增永久素材接口返回的合法media_id
    isSub_button: {type: Boolean, default: false},
    parent_id: String,
    enable: {type: Boolean, default: false}//是否启用
});

var WechatMenu = mongoose.model("WechatMenu", WechatMenuSchema);

module.exports = WechatMenu;

