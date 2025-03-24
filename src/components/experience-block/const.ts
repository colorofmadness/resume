export type Resume = {
  date: {
    start: Date;
    end?: Date;
  };
  company: string;
  city?: string;
  site?: string;
  role: string;
  about: {
    target: string;
    task?: string[];
    command?: string;
    achievement: string;
  }[];
};

export const RESUME_LIST: Resume[] = [
  {
    company: 'ООО "СЭНДБОКС"',
    city: 'Москва',
    site: 'leapcrm.ru',
    date: {
      start: new Date(2024, 6, 1),
      end: new Date(2025, 1, 1)
    },
    role: 'Ведущий Frontend-разработчик',
    about: [
      {
        target: 'Разработка CRM-системы для HoReCa (Vue 2, Nuxt 2, Vuex, SCSS, FSD)',
        command: '3 frontend, 3 backend, 1 PM, 1 QA.',
        task: [
          'Разработка и поддержка frontend-архитектуры.',
          'Оптимизация производительности веб-приложений.',
          'Интеграция API и работа с backend-разработчиками.'
        ],
        achievement:
          'Разработка модулей акций, переработка раздела остатков, модулей перемещения и движения продуктов.'
      }
    ]
  },
  {
    company: 'OMG Group',
    city: 'Москва',
    site: 'omgapp.tech',
    date: {
      start: new Date(2023, 3, 1),
      end: new Date(2024, 6, 1)
    },
    role: 'Тех.лид, Frontend-разработчик',
    about: [
      {
        target:
          'Разработка CRM-системы и web-приложения для HoReCa (Vue 3, TypeScript, Vite, SCSS, PWA)',
        task: [
          'Руководство командой и менторинг разработчиков.',
          'Code review и обеспечение качества кода.',
          'Разрабатывал ui web-приложения.'
        ],
        achievement: 'Разработка разделов "Заведение", "Карта столов", "Сотрудники и смены".'
      },
      {
        target:
          'Разработка личного кабинета управляющей компании (Property Management) (Vue 3, TypeScript, Vite, Pinia, SCSS, PWA)',
        task: [
          'Руководство командой и менторинг разработчиков.',
          'Code review и обеспечение качества кода.',
          'Участие в планировании и управлении проектами.'
        ],
        command: '4 frontend, 1 backend, 1 PM, 1 QA.',
        achievement: 'Разработка главной страницы, модулей уведомлений и новостей.'
      }
    ]
  },
  {
    company: 'ООО "Амадо"',
    city: 'Пермь',
    site: 'amado-id.ru',
    date: {
      start: new Date(2020, 5, 1),
      end: new Date(2023, 3, 1)
    },
    role: 'Frontend-разработчик (1 год 11 месяцев),<br/> Тех.лид, Frontend-разработчик (1 год)',
    about: [
      {
        target:
          'Разработка платформы для корпоративного обучения (Skill Cup) (React, Redux, Redux-toolkit, TypeScript, Webpack):',
        command: '2 frontend, 2 backend, 1 PM, 1 аналитик, 1 QA',
        task: [
          'Руководство командой и менторинг разработчиков.',
          'Code review и обеспечение качества кода.'
        ],
        achievement: 'Разработка административной и пользовательской частей.'
      },
      {
        target:
          'Разработка интернет-магазина мебели (e-commerce) (Vue 2, Vuex, Nuxt 2, Angular, Webpack, Gulp).',
        command: '6 frontend, 6 backend, 3 PM, 3 QA, 2 аналитика.',
        achievement: 'Перенос функционала с Angular на Vue, A/B-тесты, онбординги, SEO-оптимизация.'
      },
      {
        target:
          'Разработка интернет-магазина парфюмерии и косметики (e-commerce) (Vue 2, Vuex, Nuxt 2).',
        command: '3 frontend, 2 backend, 1 PM, 1 QA.',
        achievement: 'Разработал каталог и корзину.'
      }
    ]
  }
];
