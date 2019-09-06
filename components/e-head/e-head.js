// components/e-head/e-head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    returnImg:{
      type: String,
      value: 'white'
    },
    imgVisible: {
      type: Boolean,
      value: true
    },
    headTitle:{
      type: String,
      value: 'E商城'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuButtonInfo: getApp().globalData.menuButtonInfo,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
