// pages/communityPublish/communityPublish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishValue: '',
    publishImgs: []
  },
  /**
   * textarea 值
   */
  setPublishValue({ detail }) {
    this.setData({
      publishValue: detail.value
    })
  },
  /**
   * 选择本地图片或者打开相机
   */
  selectChooseImgs () {
    let { publishImgs } = this.data;
    wx.chooseMessageFile({
      count: 4,
      success: res=> {
        console.log(res)
        res.tempFiles.forEach(item => {
          if (publishImgs.length >= 4) {
            return
          }
          publishImgs.push(item)
        })
        this.setData({
          publishImgs
        })
      },
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