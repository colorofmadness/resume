export type Resume = {
  date: {
    start: Date;
    end?: Date;
  };
  company: string;
  role: string;
};
export const RESUME_LIST: Resume[] = [
  {
    company: 'Стартап',
    date: {
      start: new Date('1/1/24')
    },
    role: 'Тех.лид, Frontend-разработчик'
  },
  {
    company: 'C&U',
    date: {
      start: new Date('2/1/24'),
      end: new Date('5/1/24')
    },
    role: 'Тех.лид, Frontend-разработчик'
  },
  {
    company: 'Стартап',
    date: {
      start: new Date('4/1/23'),
      end: new Date('1/1/24')
    },
    role: 'Тех.лид, Frontend-разработчик'
  }
];
