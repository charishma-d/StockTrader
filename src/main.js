import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js' //import routes
Vue.use(VueRouter);

const router= new VueRouter({ //configure the router
  mode:'history',
  routes
})
new Vue({
  el: '#app',
  router, //adding router to the vue instance
  render: h => h(App)
})
