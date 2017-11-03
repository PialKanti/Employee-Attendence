import Vue from 'vue'
import App from './App.vue'
import Register from './Register.vue'
import EmpList from './EmpList.vue'
import ActiveEmp from './ActiveEmp.vue'

Vue.component('emp-reg',Register);
Vue.component('emp-list',EmpList);
Vue.component('emp-active',ActiveEmp);
new Vue({
  el: '#app',
  render: h => h(App)
})
