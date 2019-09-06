// pages/myOrderList/myOrderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headTitles: ['全部', '待发货', '待收货'],
    headTindex: 0
  },
  /**
   * 跳转到详情页面
   */
  navigatoMyOrderDetails({ currentTarget: { dataset } }) {
    let params = {
      id: dataset.id
    }
    wx.navigateTo({
      url: `/pages/myOrderDetails/myOrderDetails?params=${JSON.stringify(params)}`,
    })
  },
  /**
   * 切换head 
   */
  changeHeadTindex({ currentTarget: { dataset } }) {
    this.setData({
      headTindex: dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})