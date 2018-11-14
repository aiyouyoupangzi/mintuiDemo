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
  ],
  linkActiveClass:'mui-active',
  mode:'history'
})
