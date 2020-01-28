App({
  onLaunch:function(){
    // 不会每次进入都创建，会后台保存两个小时
    console.log('创建完成')
    // wx.request({
    //   url:''
    // })

    // wx.getUserInfo({
    //   success:function(res){
    //    console.log(res)
    //   }
    // })

    // setTimeout(function(){
    //    const err = new Error()
    //    throw err
    // },1000)
   

  },
  onShow:function(option){
    // 每次进入都显示
    console.log(option)
  },
  onHide:function(){
    // console.log('离开小程序')
  },
  onError:function(){
    console.log('有错误了')
  },
  globalData:{
    name:'旺旺',
    age:28
  }
})