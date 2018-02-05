/**
 * Created by Administrator on 2018/2/3.
 */
module.exports = {
    //配置入口文件
    entry:'./main.js',
    //设置入口输出的位置
    output:{
        path:__dirname, //在项目的根路径。
        filename:'build.js',
    },
    module:{
        rules:[
            {
                test:/\.vue$/, //正则匹配，所有以.vue结尾的文件都使用vue-loader来加载。
                loader:'vue-loader',
            },
            {
                test:/\.js$/, //正则匹配，所有以.js结尾的文件都使用babel-loader来加载。
                loader:'babel-loader',
                exclude:/node_modules/, //排除node_modules文件夹
            }
        ]
    }



}