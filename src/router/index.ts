import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      breadcrumb: 'index.html'
    },
    component: () => import('@pages/main-page/'),
    children: [
      {
        name: 'about',
        path: '/about',
        meta: {
          breadcrumb: 'README.md'
        },
        component: () => import('@components/about-block')
      },
      {
        name: 'resume',
        path: '/resume',
        meta: {
          breadcrumb: 'resume.pdf'
        },
        component: () => import('@components/experience-block')
      },
      {
        name: 'tech',
        path: '/tech',
        meta: {
          breadcrumb: 'package.json'
        },
        component: () => import('@components/tech-block')
      },
      {
        name: 'projects',
        path: '/projects',
        meta: {
          breadcrumb: 'projects.exe'
        },
        component: () => import('@components/projects-block')
      },
      {
        name: 'contacts',
        path: '/contacts',
        meta: {
          breadcrumb: 'contact.vcf'
        },
        component: () => import('@components/contacts-block')
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
