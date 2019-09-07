// components/e-shopping-list/e-shopping-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    navigatoGoodsDetails () {
      let params ={
        goodsId: '11111'
      }
      wx.navigateTo({
        url: `/pages/productView/productView?params=${JSON.stringify(params)}`,
      })
    }
  }
})
