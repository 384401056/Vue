<template>
    <div id="itany">
        <h3>{{ msg }}</h3>
        <button @click="change">点击</button>
        <UserList></UserList>
    </div>
</template>

<script>
    //引入另一个自定义组件.
    import UserList from './components/userlist.vue'

    export default{
        data(){
           return{
               msg:'Hello Vue单文件组件'
           }
        },
        methods:{
            change(){
                this.msg='aaaaaaa'
            }
        },
        components:{
            UserList
        }
    }

</script>
<!--scoped 属性代表，只在单前组件中使用该样式-->
<style>
    body {
        background-color: #cacaca;
    }
</style>
