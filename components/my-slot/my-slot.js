// components/my-slot/my-slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },
  // observers:{
  //   // 监听只能监听新数据，在proprities中可以监听老数据
  //   // titles:function(newVal){
  //   //   console.log(newVal)
  //   // }
  // },
  // 使用具名插槽要注意第二点，在options中设置multipleSolts为true，是在js中
  // 若果要让组件的样式与页面同用，需要在opations写入
  options: {
    multipleSlots: true
  },
  // 页面给组件传过来样式类
  // externalClasses:[],
  pageLifetimes:{
  show(){
  console.log('页面显示')
  },
  hide(){
    console.log('页面隐藏')
  },
  resize(){
    console.log('页面尺寸改变')
  }
  },
  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },
    attached(){
      console.log('组件被加载到页面')
    },
    ready(){
    console.log('组件被渲染出来')
    },
    moved(){
   console.log('组件被移动在节点之间')
    },
    detached(){
    console.log('组件被移除了')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  message:'哈哈哈'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
