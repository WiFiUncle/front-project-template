import App from './App'
import router from './router'
import Vue from './vue'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index'

Vue.config.productionTip = false

//Vue.use(...plugin);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
