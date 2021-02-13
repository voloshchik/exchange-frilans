import { createRouter, createWebHashHistory } from 'vue-router'
import New from '@/views/New'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/new', component: New },
    { path: '/tasks', component: Tasks },
    { path: '/task/:id', component: Task },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
