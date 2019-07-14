import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import blogDetail from './view/blogDetail'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(ElementUI)
Amplify.configure(awsconfig)
Vue.use(VueRouter); //挂载属性
Vue.use(AmplifyPlugin, AmplifyModules)
let router = new VueRouter({
  routes: [
      //一个个对象
      {path:'/',component:HelloWorld},
      { path: '/blogDetail', name:'blogDetail' ,component: blogDetail }
  ]
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')