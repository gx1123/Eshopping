// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567567917193.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567568393748.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567568222489.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567567917193.png'
      ],
    sendPopVisible: false
  },
  /**
   * 改变转送弹窗状态
   */
  changeSendPopVisible () {
    this.setData({
      sendPopVisible: !this.data.sendPopVisible
    })
  },
  /**
   * 前往商城 
   */
  navigateToShopping () {
    wx.switchTab({
      url: '/pages/shopping/shopping',
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})