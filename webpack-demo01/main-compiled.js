'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入自定义模块时，要加 ./

/**
 * Created by Administrator on 2018/2/3.
 */
new _vue2.default({
	el: "#app",
	//可以用以下的这种方式。
	//comments:{
	//	'my-app':App,
	//},
	render: function render(h) {
		//使用render函数来渲染组件,等价于components。
		return h(_App2.default);
	}
});

//# sourceMappingURL=main-compiled.js.map