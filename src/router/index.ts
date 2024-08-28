import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const token = true
const ifAuthenticated = (to: any, from: any, next: any) => {
  if (token) {
    next()
    return
  }
  next('/login')
}
const ifNotAuthenticated = (to: any, from: any, next: any) => {
  if (!token) {
    next()
    return
  }
  next('/')
}
// Definisikan rute dengan tipe `RouteRecordRaw`
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: () => import('@/components/layouts/MainLayout.vue'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/screens/Dashboard.vue')
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('@/screens/Management.vue')
      },
      {
        path: '/log',
        name: 'tanagement',
        component: () => import('@/screens/Log.vue')
      },
      {
        path: '/transaction',
        name: 'transaction',
        component: () => import('@/screens/Transaction.vue')
      },
      {
        path: '/setting/config-camera',
        name: 'configCamera',
        component: () => import('@/screens/Setting/ConfigCamera.vue')
      },
      {
        path: '/setting/config-lane',
        name: 'configLane',
        component: () => import('@/screens/Setting/ConfigLane.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: ifNotAuthenticated,
    component: () => import('@/screens/Login.vue')
  }
]

// Buat instance router dengan `createRouter`
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
