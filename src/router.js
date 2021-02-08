import { createRouter, createWebHashHistory } from 'vue-router'
import New from '@/views/New'
import Tasks from '@/views/Tasks'
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/new', component: New },
    { path: '/tasks', component: Tasks },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
