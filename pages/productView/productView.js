// pages/productView/productView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productImg:[
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567567917193.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567568393748.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567568222489.png',
      'https://etc.qljtxx.com/file//etc/2019-09-04/1567567917193.png'
    ],
    num: 1,
    currentImg: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 图片切换
  imgChange(e) {
    let idx = e.currentTarget.dataset.idx
    let cur = e.detail.current
    this.setData({
      currentImg: cur
    })
  },
  /* 加数 */
  addCount: function (e) {
    let num = this.data.num;
    // 总数量-1  
    if (num < 1000) {
      this.data.num++;
    }
    // 将数值与状态写回  
    this.setData({
      num: this.data.num
    });
  },
  /* 减数 */
  delCount: function (e) {
    console.log("刚刚您点击了减1");
    let num = this.data.num;
    // 商品总数量-1
    if (num > 1) {
      this.data.num--;
    }
    // 将数值与状态写回  
    this.setData({
      num: this.data.num
    });
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