import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('emp-home',Home);
new Vue({
  el: '#app',
  render: h => h(App)
})
