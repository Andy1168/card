// pages/deal/deal.js
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listl:[],
    display_num:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://card.xiaoniren.cn/restapi/bill/index',
      data: {
        wechat_user_id: options.wechat_user_id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          listl: res.data.data.items,
        })
        if (res.data.data.items.length==0){
          that.setData({
            display_num:1
          })
        }else{
          that.setData({
            display_num: 0
          })
        }
        
      }
    })

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
  onShareAppMessage: function (res) {
    //   var onOff = false;
    //   onOff = wx.getStorageSync('auth')
    //   if (!onOff) {
    //     wx.showModal({
    //       title: '温馨提示',
    //       content: '请先授权',
    //       success: function (res) {
    //         if (res.confirm) {
    //           console.log('用户点击确定')
    //           wx.redirectTo({
    //             url: '../index/index'
    //           })
    //         } else if (res.cancel) {
    //           console.log('用户点击取消')
    //         }
    //       }
    //     })


    //   }
    //   if (!onOff){
    //   return false;
    // }

    var that = this
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '',
      path: '/pages/index/index?referrer=' + wx.getStorageSync('userId'),
      imageUrl: that.data.www + that.data.qrcode,
      success: function (res) {
        // 转发成功
        console.log('/pages/index/index?referrer=' + wx.getStorageSync('userId'))
      },

      fail: function (res) {
        // 转发失败
      }
    }
  },
})