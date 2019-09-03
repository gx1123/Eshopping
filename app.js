//app.js
import { dev as domain } from './utils/env.js'
import apis from './utils/api.js'

App({
  onLaunch: function () {
    // 微信更新机制
    this.getUpdateManager()
    // 获取用户手机 位置 基本信息
    this.getPhoneInfo()

  },
  $servers: apis(domain),  //所有api
  globalData: {
    userInfo: {},   // 用户信息
    location: {},   // 地址信息
    systemInfo: {}, // 设备信息
    menuButtonInfo: {}  // 菜单栏按钮位置信息
  },
  getPhoneInfo() {
    // 获取当前经纬度 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        this.globalData.location = res
      }
    })
    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systemInfo = res
      }
    });
    // 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
    this.globalData.menuButtonInfo = wx.getMenuButtonBoundingClientRect()
  },
  getUpdateManager() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
})