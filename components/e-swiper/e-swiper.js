// components/home-swiper/home-swiper.js
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
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // swiper 切换
    changeSwiperCurrent({ detail }) {
      this.setData({
        current: detail.current
      })
    },
    changeCurrent({ currentTarget: { dataset } }) {
      this.setData({
        current: dataset.current
      })
    }
  }
})
