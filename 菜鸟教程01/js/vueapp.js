/**
 * Created by Administrator on 2017/8/9.
 */

 var app1 = new Vue({
    el: '#app1',
    data: {
        message:  '<h2>菜鸟教程</h2>',
    },
})

var app2 = new Vue({
    el: '#app2',
    data: {
        ok: true,
        message: 'RUNOOB',
        id : 1
    }
})


var app3 = new Vue({
    el: '#app3',
    data: {
        seen : true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        clazz: 'class2',
        url:'http://www.baidu.com'
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message:'用户输入'
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Runoob!'
    },
    methods: {
        reverseMessage: function () {
            //反转字符串
            this.message = this.message.split('').reverse().join('')
        },
        changeMessage:function(){
            this.message = '你点击了按钮'
        }
    }
})

var app7 = new Vue({
    el: '#app7',
    data: {
        message: 'gaoyanbin'
    },
    //过滤器函数接受表达式的值作为第一个参数。这里就是message
    filters: {
        capitalize: function (value) {
            if (!value) return ' '
            value = value.toString()
            return value.toUpperCase()
            //return value.charAt(0).toUpperCase() + value.slice(1)  //首字变成大写
        }
    }
})


var app8 = new Vue({
    el: '#app8',
    data: {
        isShow:true
    }
})


var app9 = new Vue({
    el: '#app9',
    data: {
        ok : true
    }
})










