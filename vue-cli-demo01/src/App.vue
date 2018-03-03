<template>
  <div id="app">
    <div>
      {{ msg }}
      <h3>
        <router-link to="/home">主面</router-link>
        <router-link to="/news">新闻</router-link>
      </h3>
      <p>
        <button @click="getRquest">App组件，发送的AJAX请求</button>
      </p>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <p>
        <!--为自定义组件加事件-->
        <my-button @click.native="getRquest"></my-button>
      </p>
<!--       <p>
        {{msg}}
      </p> -->
    </div>

  </div>
</template>

<script>
//axios的引入要在使用axios的组件中。
//import axios from 'axios'

import MyButton from './components/MyButton.vue'

export default {
  name: 'app',
  data () {
    return {
      // msg: {}
    }
  },
  //子组件
  components:{
    'my-button':MyButton
  },

  methods:{
//    getRquest(){
//      axios.get('https://api.github.com/users/384401056')
//        .then(function(res){
//          console.log(res.data)
//        }).then(function(err){
//        console.log(err)
//      })
//    },

    getRquest(){
      this.$http.get('https://api.github.com/users/384401056')
        .then(function(res){
          console.log(res.data)
          // this.msg = res.data
        }).then(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
