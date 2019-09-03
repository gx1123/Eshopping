export default function myRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: err => {
        wx.showToast({
          title: '出错了!',
          icon: 'none'
        });
        reject(err);
      },
      complete: () => {

      }
    });
  });
}