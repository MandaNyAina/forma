import '@/assets/main.css'

import { createApp } from 'vue'
import routes from '@/routes/router'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import { createPinia } from 'pinia'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
