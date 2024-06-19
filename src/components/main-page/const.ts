import { Component, defineAsyncComponent } from 'vue';

export type TLinks = {
  id: string;
  name: string;
  icon: string;
  style: {
    '--x': number;
    '--y': number;
    '--span': number;
  };
  component: Component;
};

export const LINKS: TLinks[] = [
  {
    id: 'about',
    icon: 'menu/about',
    name: 'Обо мне',
    style: {
      '--x': 2,
      '--y': 10,
      '--span': 8
    },
    component: defineAsyncComponent(() => import('@components/about-block'))
  },
  {
    id: 'resume',
    icon: 'menu/work',
    name: 'Резюме',
    style: {
      '--x': 2,
      '--y': 2,
      '--span': 5
    },
    component: defineAsyncComponent(() => import('@components/experience-block'))
  },
  {
    id: 'tech',
    icon: 'menu/techs',
    name: 'Тех стек',
    style: {
      '--x': 13,
      '--y': 2,
      '--span': 4
    },
    component: defineAsyncComponent(() => import('@components/tech-block'))
  },
  {
    id: 'projects',
    icon: 'menu/projects',
    name: 'Портфолио',
    style: {
      '--x': 11,
      '--y': 7,
      '--span': 8
    },
    component: defineAsyncComponent(() => import('@components/projects-block'))
  },
  {
    id: 'contacts',
    icon: 'menu/contact',
    name: 'Контакты',
    style: {
      '--x': 14,
      '--y': 16,
      '--span': 4
    },
    component: defineAsyncComponent(() => import('@components/contacts-block'))
  }
];
