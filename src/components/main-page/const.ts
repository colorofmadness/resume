import { type Component } from 'vue';
import AboutBlock from '@components/about-block';
import ExperienceBlock from '@components/experience-block';
import TechBlock from '@components/tech-block';
import ProjectsBlock from '@components/projects-block';
import ContactsBlock from '@components/contacts-block';

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
    component: AboutBlock
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
    component: ExperienceBlock
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
    component: TechBlock
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
    component: ProjectsBlock
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
    component: ContactsBlock
  }
];
