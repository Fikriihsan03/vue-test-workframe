import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import themes from '@/assets/themes'
import router from '@/router'

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import Vue3Toastify,{ type ToastContainerOptions } from 'vue3-toastify'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$themes = themes
app.use(router)
app.use(createVuestic())
app.use(Vue3Toastify, {
  autoClose: 3000,
  position:toast.POSITION.TOP_RIGHT
  // ...
} as ToastContainerOptions)
app.mount('#app')
