export type TLink = {
  id: string;
  icon: string;
  name: string;
  style: {
    '--x': number;
    '--y': number;
    '--span': number;
  };
};

export const LINKS: TLink[] = [
  {
    id: 'about',
    icon: 'menu/about',
    name: 'Обо мне',
    style: {
      '--x': 2,
      '--y': 10,
      '--span': 9
    }
  },
  {
    id: 'resume',
    icon: 'menu/work',
    name: 'Резюме',
    style: {
      '--x': 3,
      '--y': 2,
      '--span': 6
    }
  },
  {
    id: 'projects',
    icon: 'menu/projects',
    name: 'Портфолио',
    style: {
      '--x': 12,
      '--y': 3,
      '--span': 8
    }
  },
  {
    id: 'contacts',
    icon: 'menu/contact',
    name: 'Контакты',
    style: {
      '--x': 13,
      '--y': 14,
      '--span': 6
    }
  }
];
