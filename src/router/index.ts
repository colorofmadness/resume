import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@pages/main-page/';

export const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: 'index',
      ext: '.html',
      menuTitle: 'Главная',
      showInNav: true
    },
    component: MainPage
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
