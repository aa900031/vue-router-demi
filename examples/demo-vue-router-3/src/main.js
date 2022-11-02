import Vue, { h } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Page from './Page.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/', component: Page }]
})

const app = new Vue({
  router,
  render: () => h(App),
})

app.$mount('#app')

