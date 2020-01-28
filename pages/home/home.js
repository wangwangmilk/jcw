const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  data:{
    // name:'纪春旺',
    // age:28,
    student:[
      {id:110,name:'kobe',age:40},
      { id: 111, name: 'wangwang', age: 2 },
      { id: 112, name: 'huahua', age: 4 },
    ],
    counter:0,
    list:[]
  },
  // 页面加载完成，在两小时内，不会再重新加载
  onLoad(){
    console.log('onLoad')
    wx.request({
      url:'http://106.54.54.237:8000/api/hy/recommend',
      success:(res)=>{
       const data = res.data.data.list
       this.setData({
          list:data
       })
      }

    })
  },
  // 页面显示出来，每次进入都会执行
  onShow(){
    console.log('onShow')
  },
  // 页面初次渲染，在两小时内，不会重新渲染
  onReady(){
    console.log('onReady')
  },
  // 小程序离开隐藏起来
  onHide(){
    console.log('onHide')
  },
  // 页面跳转
  onUnload(){
    console.log('onUnload')
  },

    handleBtnClick() {
      this.setData({
        counter: this.data.counter + 1
      })
     
    },
    del(){
      this.setData({
        counter:this.data.counter-1
      })
    },
  handleUserInfo(event){
     console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈在被点击')
  },
  onPageScroll(obj){
    // console.log(obj)
  },
  onReachBottom(){
    console.log('滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
  

  

  
  
 
})