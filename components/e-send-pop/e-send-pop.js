// components/e-send-pop/e-send-pop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    popType:{
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeSendPop () {
      this.triggerEvent('closeSendPop')
    },
    confirmSend () {
      this.setData({
        popType: this.data.popType + 1
      })
    },
    navigatoMyOrderDetails () {
      this.triggerEvent('navigatoMyOrderDetails')
      this.triggerEvent('closeSendPop')
    }
  }
})
