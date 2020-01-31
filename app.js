App({

  globalData:{
    token:''
  },
  onLaunch: function () {
    const token = wx.getStorageSync('token')
    if(token && token.length){
      this.checkToken(token)
    }else {
      console.log('没有拿到缓存token，进行登录')
      this.login()
    }
  },
  login(){
    wx.login({
      success: res => {
        console.log(res)
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            console.log(res)
            const token = res.data.token
            this.globalData.token = token
            wx.setStorageSync('token', token)
          }

        })
      }

    })
  },
  checkToken(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      header: {
        token
      },
      method: 'post',
      success: res => {
        console.log('使用缓存中的token登录')
        console.log(res)
      }
    })
  }
})
