import { type Component, defineAsyncComponent } from 'vue';

export type TLink = {
  id: string;
  icon: string;
  name: string;
  style: {
    '--x': number;
    '--y': number;
    '--span': number;
  };
  component: Component;
};

export const LINKS: TLink[] = [
  {
    id: 'about',
    icon: 'menu/about',
    name: 'Обо мне',
    style: {
      '--x': 2,
      '--y': 10,
      '--span': 8
    },
    component: defineAsyncComponent(() => import('@pages/about'))
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
    component: defineAsyncComponent(() => import('@pages/resume'))
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
    component: defineAsyncComponent(() => import('@pages/tech'))
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
    component: defineAsyncComponent(() => import('@pages/projects'))
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
    component: defineAsyncComponent(() => import('@pages/contacts'))
  }
];
