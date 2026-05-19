import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      breadcrumb: 'index.html'
    },
    component: () => import('@pages/main'),
    children: [
      {
        name: 'about',
        path: '/about',
        meta: {
          breadcrumb: 'README.md'
        },
        component: () => import('@pages/about')
      },
      {
        name: 'resume',
        path: '/resume',
        meta: {
          breadcrumb: 'resume.pdf'
        },
        component: () => import('@pages/resume')
      },
      {
        name: 'projects',
        path: '/projects',
        meta: {
          breadcrumb: 'projects.exe'
        },
        component: () => import('@pages/projects')
      },
      {
        name: 'contacts',
        path: '/contacts',
        meta: {
          breadcrumb: 'contact.vcf'
        },
        component: () => import('@pages/contacts')
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
