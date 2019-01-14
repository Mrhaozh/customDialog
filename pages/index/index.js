//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
 
  },
  //事件处理函数
  onLoad: function () {
    //console.log(this.selectComponent("#test"));
  },
  show:function(){
    this.selectComponent("#test").setTitle("添加账号");
    var content = [{ "placeholder": "账号", "inputType": "text" }, { "placeholder": "密码", "inputType": "text" }, { "placeholder": "联系方式", "inputType": "phone" }];
    this.selectComponent("#test").setContent(JSON.stringify(content));
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
    console.log("show");
    this.selectComponent("#test").hideModal();
  },
  getUserInfo: function(e) {
 
  }
})
