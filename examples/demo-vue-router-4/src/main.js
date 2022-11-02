import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Page from './Page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: Page }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
