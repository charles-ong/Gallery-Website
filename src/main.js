import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Seoul22 from './pages/Seoul22.vue'
import Personal from './pages/Personal.vue'

// import './assets/main.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Seoul22', name: 'Seoul22', component: Seoul22 },
  { path: '/Personal', component: Personal },
]

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')