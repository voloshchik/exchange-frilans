import { createRouter, createWebHashHistory } from 'vue-router'

import Tasks from '@/views/Tasks'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/tasks' },
    {
      path: '/new',
      name: 'New',
      component: () => import('../src/views/New.vue'),
    },
    { path: '/tasks', component: Tasks },
    {
      path: '/task/:id',
      name: 'Task',
      props: true,
      component: () => import('../src/views/Task.vue'),
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
