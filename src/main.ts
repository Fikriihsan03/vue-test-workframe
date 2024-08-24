import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import themes from '@/assets/themes'

const app = createApp(App)
app.config.globalProperties.$themes = themes
app.mount('#app')
