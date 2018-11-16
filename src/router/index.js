import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: () => System.import("@/components/Home.vue")
    },
    {
      path: "/home",
      name: "首页",
      component: () => System.import("@/components/Home.vue")
    },
    {
      path: "/member",
      name: "会员",
      component: () => System.import("@/components/Member.vue")
    },
    {
      path: "/shopcar",
      name: "购物车",
      component: () => System.import("@/components/ShopCar.vue")
    },
    {
      path: "/search",
      name: "搜索",
      component: () => System.import("@/components/Search.vue")
    },
    {
      path:'/home/news',
      name:"新闻资讯",
      component:() => System.import('@/components/home/News.vue')
    },
    {
      path:'/home/newscontent/:index',
      name:'新闻详情',
      component:() => System.import('@/components/home/NewsContent.vue')
    }
  ],
  linkActiveClass:'mui-active',
  mode:'history'
})
