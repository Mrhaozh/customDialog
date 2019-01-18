//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
 
  },
  //事件处理函数
  onLoad: function () {
    var content = [{ "placeholder": "账号"}, { "placeholder": "密码"}];
    wx.setStorageSync("con", content);
  },
  onShow:function(){
    var con = wx.getStorageSync("con");
    console.log(con);
  },
  show:function(){
   
    var content = [{ "placeholder": "账号", "name": "username", "inputType": "text","value":"" }, { "placeholder": "密码", "name": "password","inputType": "text","value":"" }, { "placeholder": "联系方式","name":"tel", "inputType": "phone","value":"" }];
    this.selectComponent("#test").setData({
        title:"添加账号",
        content:content
    });
    this.selectComponent("#test").showModal();
  },
  showss:function(){
    var content = [{ "placeholder": "账号", "name": "username", "inputType": "text","value":""}, { "placeholder": "密码", "name": "password", "inputType": "text","value":"" }];
    this.selectComponent("#test").setData({
      title: "添加",
      content: content
    });
    this.selectComponent("#test").showModal();
  },
  shows:function(){
    wx.showModal({
      title: 'z',
      content: 'zz',
    })
  },
  cancelEvent: function () {
    console.log("ext");
    this.selectComponent("#test").hideModal();
  },
  okEvent: function () {
    console.log(this.selectComponent('#test').data.inputValue);
    this.selectComponent("#test").hideModal();
  },
  getUserInfo: function(e) {
 
  }
})
