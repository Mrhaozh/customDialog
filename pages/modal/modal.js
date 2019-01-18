// pages/modal/modal.js
var subResult=[];
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: '',
    },
    content:{
      type:JSON,
      value: '',
    }

  },
  data: {
    // 这里是一些组件内部数据
    isHide: true,
    inputValue:[]
  },
  methods: {
    // 这里是一个自定义方法
    showModal:function(){
      this.setData({isHide:false});
    },
    hideModal: function () {
      this.setData({isHide: true,inputValue:[]});
      subResult = [];
    },
    cancelEvent: function () {
      this.triggerEvent('cancelEvent');
    },
    okEvent: function () {
      this.triggerEvent('okEvent');
    },
    input: function (e) {
     
      subResult[e.target.dataset.name]=e.detail.value;
      this.setData({inputValue:subResult});
    }
  },

})