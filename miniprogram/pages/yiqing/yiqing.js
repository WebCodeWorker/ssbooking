// miniprogram/pages/yiqing/yiqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getYiQingData();
  },

  //获取疫情数据
  getYiQingData() {
    //加载提示
    wx.showLoading({
      title: '加载中...',
      mask: true
    })

    wx.request({
      method: 'GET',
      url: 'https://api.tianapi.com/txapi/ncov/index',
      data: {
        key: '05c9c231654fad19051ce388d3a14002'
      },
      success: result => {
        wx.hideLoading();
        
      },
      fail: err => {
        wx.hideLoading();
        
      }
    })
  }

  
})