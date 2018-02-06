<template>
    <div>
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:['Jims','Luce','Keven']
            }
        }
    }
</script>

<style scoped>
    li {
        background-color: aquamarine;
    }
</style>