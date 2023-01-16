import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import Photos from './pages/Photos.vue'
import Instagram from './pages/Instagram.vue'
import Shop from './pages/Shop.vue'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Photos', name: 'Photos', component: Photos },
  { path: '/Instagram', component: Instagram },
  { path: '/Shop', component: Shop },
]

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')