import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import axios from 'axios'

Vue.use(VueRouter);

//直接在Vue的属性中加入axios,然后就可以全局使用Vue.$http来调用。$http的名字是自定义的。
Vue.prototype.$http = axios;

//创建路由实例
const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
