import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Login',
      path: '/',
      component: () => import('./login.vue'),
    },
  ],
});

export default router;
