import { createRouter, createWebHistory } from 'vue-router'

// 引入你的页面组件
// 这里假设你有一个 Home.vue 和 Callback.vue
import App from '@/App.vue'
import Callback from '@/Callback.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  }
]

const router = createRouter({
  history: createWebHistory(), // 这里用的是 history 模式，也可以改成 hash 模式 createWebHashHistory()
  routes,
})

export default router
