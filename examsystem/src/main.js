import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.baseurls="/api"
// Vue.prototype.baseurls="http://exam.hhzj.net"
// window.addEventListener('message', function (e) {
// 	 if(e.origin==''){
// 		 if (e.source == window.parent){
// 		  var auth=e.data;
// 		  window.localStorage.setItem("Authorization",auth);
// 		  // window.localStorage.setItem("Authorization",e.data);
// 		}
// 	 }
// }, false);

// axios.interceptors.response.use(function (response) {
//     // token 已过期，重定向到登录页面
//     if (response.data.code == 401){
//         window.location.href = 'http://www.hhzj.net/hhxj/js_zj'
//     }
//     return response
// }, function (error) {
//     // Do something with response error
//     return Promise.reject(error)
// })

// if(localStorage.getItem('Authorization') == undefined || localStorage.getItem('Authorization') == null || localStorage.getItem('Authorization') == ''){
// 	window.location.href = 'http://www.hhzj.net/hhxj/js_zj'
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
