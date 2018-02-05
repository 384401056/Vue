/**
 * Created by Administrator on 2018/2/3.
 */
import Vue from 'vue'
import App from './App.vue' //引入自定义模块时，要加 ./

new Vue({
	el: "#app",
	//可以用以下的这种方式。
	//comments:{
	//	'my-app':App,
	//},

	render:function(h){ //使用render函数来渲染组件,等价于components。
		return h(App);
	}
});