<template>
  <div id="home">
    <h3>这是主页</h3>
    <button @click="getRquest">Home组件，发送的AJAX请求</button>
  </div>
</template>


<script>
  //axios的引入要在使用axios的组件中。
//  import axios from 'axios'

  export default{
    name:'home',
    data(){
      return{

      }
    },
    methods:{
//      getRquest(){
//        axios.get('https://api.github.com/users/384401056')
//          .then(function(res){
//            console.log(res.data)
//          }).then(function(err){
//          console.log(err)
//        })
//      },

      getRquest(){
        this.$http.get('https://api.github.com/users/384401056')
          .then(function(res){
            console.log(res.data)
          }).then(function(err){
          console.log(err)
        })
      }
    }
  }
</script>
