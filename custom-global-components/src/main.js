import Vue from 'vue'
import App from './App.vue'
import Login from './components'


Vue.use(Login)

new Vue({
  el: '#app',
  render: h => h(App)
})
