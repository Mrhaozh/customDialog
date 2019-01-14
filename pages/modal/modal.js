// pages/modal/modal.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    isHide: true,
    title:"",
    content:[]
  },
  methods: {
    // 这里是一个自定义方法
    setTitle:function(title){
      this.setData({title:title});
    },
    setContent:function(content){
      let list=JSON.parse(content);
      this.setData({content:list});  
    },
    showModal:function(){
      this.setData({isHide:false});
    },
    hideModal: function () {
      this.setData({isHide: true});
    },
    cancelEvent: function () {
      this.triggerEvent('cancelEvent');
    },
    okEvent: function () {
      this.triggerEvent('okEvent');
    }
  },

})