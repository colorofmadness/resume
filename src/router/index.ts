import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@pages/main-page/';
import AboutPage from '@pages/about-page/';
import ProjectsPage from '@pages/projects-page/';
import ContactsPage from '@pages/contacts-page/';
import ExperiencePage from '@pages/experience-page/';

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
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'README',
      ext: '.md',
      menuTitle: 'Обо мне',
      showInNav: true
    },
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      title: 'projects',
      ext: '.exe',
      menuTitle: 'Проекты',
      showInNav: true
    },
    component: ProjectsPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'contact',
      ext: '.vcf',
      menuTitle: 'Контакты',
      showInNav: true
    },
    component: ContactsPage
  },
  {
    path: '/exp',
    name: 'exp',
    meta: {
      title: 'experience',
      ext: '.pdf',
      menuTitle: 'Опыт работы',
      showInNav: true
    },
    component: ExperiencePage
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
