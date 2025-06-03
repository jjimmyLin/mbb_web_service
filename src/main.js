import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

createApp(App).mount('#app')
app.use(router)  // 注册路由插件
app.mount('#app')