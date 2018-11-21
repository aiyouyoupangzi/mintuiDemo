// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import axios from 'axios'
import VuePreview from 'vue2-preview'
import Vuex from 'vuex'

Vue.use(Mint);
Vue.prototype.axios = axios;
Vue.use(VuePreview);
Vue.use(Vuex);

var car = localStorage.getItem('car') || '[]';

var store = new Vuex.Store({
  state:{
    car:JSON.parse(car)
  },
  mutations:{
    // 如果想要操作store中的state的值，只能通过调用mutations提供的方法才能操作对应的数据，
    // 不推荐直接操作state中的数据，因为万一导致了数据的紊乱，不能快速定位到错误的位置
    // 注意：mutations的参数列表中最多只能支持两个参数，其中参数1是state状态，参数2是通过commit提交过来的参数，
    // 所以如果想要传多个参数的话可以传一个对象
    addToCar(state,params){
      var falg = false;
      state.car.some(item => {
        if(item.id === params.id){
          item.count += parseInt(params.count);
          falg = true;
          return true;
        }
      });
      if(!falg){
        state.car.push(params);
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    // 组件中使用这个方法时：this.$store.commit('方法名');

    updateCar(state,params){
      state.car.some(item => {
        if(item.id == params.id){
          item.count = parseInt(params.count);
          return true;
        }
        localStorage.setItem('car',JSON.stringify(state.car));
      })
    },

    deleteCar(state,params){
      state.car.some(item => {
        if(item.id == params.id){
          state.car.splice(params.index,1)
          return true;
        }
      });
      localStorage.setItem('car',JSON.stringify(state.car));
    },

    changeSelected(state,params){
      state.car.some(item => {
        if(item.id == params.id){
          item.selected = params.selected;
          return true;
        }
      });
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },

  // 注意：这里的getters只负责对外提供数据，不负责修改数据，如果想要修改数据只能通过mutations
  // getters中的方法和组件中的过滤器filters比较类似，他们都没有修改原数据，知识把元数据做了一层包装提供给了调用者
  // getters也和computed比较像，只要state中的数据发生了变化，那么如果getters正好也引用了这个数据机会立即触发getters的重新求值
  getters:{
    changeData:function(state){
      var c = 0;
      state.car.forEach(item =>{
        c += item.count;
      })
      return c;
    },
    getIdCount:function(state){
      var countObj = {};
      state.car.forEach(item => {
        countObj[item.id] = item.count;
      });
      return countObj;
    },
    getGoodsStatus:function(state){
      var statusObj = {};
      state.car.forEach(item => {
        statusObj[item.id] = item.selected;
      })
      return statusObj;
    },
    getNewCount:function(state){
      var num = 0;
      var price = 0;
      state.car.forEach(item =>{
        if(item.selected == true){
          num += parseInt(item.count);
          price += parseInt(item.price) * parseInt(item.count);
        }
      })
      return {
        'num':num,
        'price':price
      };
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
