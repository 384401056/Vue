<template>
  <div id="news">
    <h3>这是新闻</h3>
    <button @click="getRquest">News组件，发送的AJAX请求</button>
  </div>
</template>

<script>
  //axios的引入要在使用axios的组件中。
//  import axios from 'axios'

  export default{
    name:'news',
    data(){
      return{

      }
    },
    methods:{
      getRquest(){
//        axios.get('https://api.github.com/users/384401056')
//          .then(function(res){
//            console.log(res.data)
//          }).then(function(err){
//          console.log(err)
//        })

        this.$http.get('https://api.github.com/users/384401056')
          .then(function (res) {
            console.log(res.data)
          }).then(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>
