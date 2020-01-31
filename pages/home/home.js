// pages/category/category.js
Page({

  handleShowToast(){
    wx.showToast({
      title: 'hello',
      duration: 3000,
      icon:'loading',
      mask:true
      
      // image:''
    })
   
  },
  handleShowModal(){
    wx.showModal({
      title:"我是标题",
      content:"我是内容",
      confirmColor:"red",
      showCancel:false,
      cancelText:'退出',
      success:(res)=>{
       console.log(res)
       if(res.cancel){
         console.log('用户点击了取消')
       }
       if(res.confirm){
         console.log('用户点击了确定')
       }
      }

    })
  },
  handleShowLoading(){
    wx.showLoading({
      title:'加载中'
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
   
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList:['相册','相机'],
      itemColor:'green',
      
      success:res=>{
        console.log(res)
      }
    })
  },
  // options是多个参数
  onShareAppMessage(options){
    return {
      title:"好好学习，天天向上",
      path:'pages/about/about',
      // 要跟着Url
      imageUrl:'/assets/tabbar/w.jpg'

    }
  }
})