import { Component, defineAsyncComponent } from 'vue';

export type TLinks = {
  id: string;
  name: string;
  style: {
    '--x': number;
    '--y': number;
    '--span': number;
  };
  component: Component;
};

export const LINKS: TLinks[] = [
  {
    id: '#about',
    name: 'Обо мне',
    style: {
      '--x': 2,
      '--y': 10,
      '--span': 8
    },
    component: defineAsyncComponent(() => import('@components/about-block'))
  },
  {
    id: '#resume',
    name: 'Резюме',
    style: {
      '--x': 2,
      '--y': 2,
      '--span': 5
    },
    component: defineAsyncComponent(() => import('@components/experience-block'))
  },
  {
    id: '#tech',
    name: 'Тех стек',
    style: {
      '--x': 13,
      '--y': 2,
      '--span': 4
    },
    component: defineAsyncComponent(() => import('@components/tech-block'))
  },
  {
    id: '#projects',
    name: 'Портфолио',
    style: {
      '--x': 11,
      '--y': 7,
      '--span': 8
    },
    component: defineAsyncComponent(() => import('@components/projects-block'))
  },
  {
    id: '#contacts',
    name: 'Контакты',
    style: {
      '--x': 14,
      '--y': 16,
      '--span': 4
    },
    component: defineAsyncComponent(() => import('@components/contacts-block'))
  }
];
