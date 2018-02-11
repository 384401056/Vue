/**
 * Created by Administrator on 2018/2/9.
 */
import Home from './components/Home.vue'
import News from './components/News.vue'


export default {
    routes:[
      {
        path:'/home',
        component:Home
      },
      {
        path:'/news',
        component:News
      }
    ]
}
