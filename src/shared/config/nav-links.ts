import { type Component } from 'vue';

import PAbout from '@pages/about';
import PResume from '@pages/resume';
import PTech from '@pages/tech';
import PContacts from '@pages/contacts';
import PProjects from '@pages/projects';

export type TLinks = {
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
    component: PAbout
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
    component: PResume
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
    component: PTech
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
    component: PProjects
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
    component: PContacts
  }
];
