import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import themes from '@/assets/themes'
import router from '@/router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
app.config.globalProperties.$themes = themes
app.use(router)
app.mount('#app')
