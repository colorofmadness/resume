import { createRouter, createWebHistory } from 'vue-router';
import Ui from '@pages/ui/';

export const routes = [
  {
    path: '/',
    name: 'ui',
    component: Ui
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
