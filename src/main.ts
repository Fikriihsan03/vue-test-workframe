import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import themes from '@/assets/themes'
import router from '@/router'

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App)
app.config.globalProperties.$themes = themes
app.use(router)
app.use(createVuestic())
app.mount('#app')
