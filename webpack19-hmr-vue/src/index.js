import Vue from 'vue';
import App from './App.vue';

console.log('vue组件:App', App)
new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')