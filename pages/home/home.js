// pages/category/category.js
// 需要写封装的函数的名字
import request from '../../network/request.js'

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
    request({
      url:'/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    // request({
    //   url:'http://httpbin.org/post',
    //   data:{
    //     name:'花花',
    //     age:50
    //   },
    //   method:'post'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
      // wx.request({
      //   url:"http://106.54.54.237:8000/api/hy/recommend",
      //    success:res =>{
      //      console.log(res)
      //    }
      // }),
      // wx.request({
      //   url:"http://106.54.54.237:8000/api/hy/home/data",
      //   data:{
      //     type:"sell",
      //     page:"1"
      //   },
      //   success:res=>{
      //     console.log(res)
      //   }
      // }),
      // wx.request({
      //   url:"http://httpbin.org/post",
      //   data:{
      //     name:"旺旺",
      //     age:28
      //   },
      //   method:"post",
      //   success:res=>{
      //     console.log(res)
      //   },
      //   fail:err=>{
      //     console.log(err)
      //   }
      // })
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