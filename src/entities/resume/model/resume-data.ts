import type { IResumeItem } from './types';

export const RESUME_LIST: IResumeItem[] = [
  {
    company: '01.tech',
    city: 'Санкт-Петербург',
    site: '01.tech',
    date: {
      start: new Date(2025, 4, 1),
      end: new Date(2026, 4, 1)
    },
    role: 'Ведущий Frontend-разработчик',
    about: [
      {
        target:
          'Разработка и поддержка внутренней UI-библиотеки для продуктовой компании (Vue 3, TypeScript, Vite, PostCSS, PrimeVue)',
        command: '5 frontend, 1TL, 1 PM, 1 QA.',
        task: [
          'Проектирование архитектуры и разработка новых компонентов.',
          'Поддержка и рефакторинг существующих компонентов библиотеки.',
          'Code review и обеспечение качества кода.',
          'Планирование релизов: формирование скоупа задач и приоритизация.',
          'Сборка релизных веток и управление версиями библиотеки.',
          'Документирование компонентов и процессов разработки.'
        ],
        achievement:
          'Развитие и масштабирование UI-библиотеки: внедрение 15+ новых компонентов, рефакторинг legacy-кода, что ускорило разработку проектов на 25%'
      }
    ]
  },
  {
    company: 'ООО "СЭНДБОКС"',
    city: 'Москва',
    site: 'leapcrm.ru',
    date: {
      start: new Date(2023, 3, 1),
      end: new Date(2025, 2, 1)
    },
    role: 'Ведущий Frontend-разработчик',
    about: [
      {
        target: 'Разработка CRM-системы для HoReCa (Vue 2, Nuxt 2, Vuex, SCSS, FSD)',
        command: '3 frontend, 3 backend, 1 PM, 1 QA.',
        task: [
          'Разработка и развитие масштабируемой frontend-архитектуры CRM-системы в сегменте HoReCa.',
          'Проектирование UI и архитектуры для личных кабинетов и CRM-систем.',
          'Оптимизация производительности и скорости загрузки веб-приложений.',
          'Налаживание процессов интеграции API и тесное взаимодействие с backend-командой.',
          'Кросс-браузерная совместимость и адаптивная верстка интерфейсов CRM и личного кабинета.'
        ],
        achievement:
          'Спроектировал и реализовал с нуля крупные модули «Акции» и «Перемещение и движение продуктов».'
      }
    ]
  },
  {
    company: 'ООО "Амадо"',
    city: 'Пермь',
    site: 'amado-id.ru',
    date: {
      start: new Date(2020, 5, 1),
      end: new Date(2023, 2, 1)
    },
    role: 'Frontend-разработчик',
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

export const CAREER_START_DATE = new Date(2020, 5, 1);
