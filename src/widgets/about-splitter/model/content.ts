import type { NavLink } from '@features/about-nav';

import lokiPhoto from '@shared/assets/images/loki.jpg';
import lokiAstridPhoto from '@shared/assets/images/loki&astrid.jpg';
import photoMain from '@shared/assets/images/photo-main.jpg';

export type Pet = { name: string; emoji: string; breed: string; fact: string; photo?: string };
export type GalleryItem = { src: string; alt: string };
export type AboutBlock = {
  title: string;
  text: string;
  bullets?: string[];
  pets?: Pet[];
  gallery?: GalleryItem[];
};

export const workContent: Record<NavLink, AboutBlock> = {
  about: {
    title: 'Работа',
    text: 'В коммерческой разработке с 2020 года, вырос до ведущего разработчика.',
    bullets: [
      'UI-библиотека: 15+ компонентов, рефакторинг legacy, ускорение разработки на 25%',
      'CRM-системы для HoReCa, Property Management, e-commerce',
      'Code review, менторинг, планирование и управление релизами'
    ]
  },
  journey: {
    title: 'Карьерный путь',
    text: 'Вырос от разработчика до техлида за 3 года: от e-commerce и обучающих платформ до продуктовых CRM и внутренней UI-библиотеки.',
    bullets: [
      '2020–2023: Амадо — e-commerce, корп. обучение, рост до техлида',
      '2023–2024: OMG Group — CRM и PWA для HoReCa, руководство командой',
      '2024–2025: Сэндбокс — CRM HoReCa, оптимизация и интеграции',
      '2025–н.в.: 01.tech — внутренняя UI-библиотека, архитектура и релизы'
    ]
  },
  interests: {
    title: 'Что интересно в работе',
    text: 'Нравятся задачи с системным эффектом — когда улучшение ощущается и пользователями, и командой.',
    bullets: [
      'Компонентные библиотеки и дизайн-системы',
      'Оптимизация производительности веб-приложений',
      'Архитектура фронта, code review, DX'
    ]
  },
  skills: {
    title: 'Стек',
    text: 'Технологии и практики из коммерческой разработки.',
    bullets: [
      'Vue 3/2, Nuxt 2, TypeScript, React',
      'Pinia / Vuex, Vue Router',
      'Vite, Webpack, PWA',
      'PostCSS, SCSS, PrimeVue, FSD',
      'Архитектура, перфоманс, интеграция API'
    ]
  },
  contacts: {
    title: 'Контакты',
    text: 'Открыт к интересным предложениям — пишите по почте, в Telegram или LinkedIn.'
  }
};

export const lifeContent: Record<NavLink, AboutBlock> = {
  about: {
    title: 'Жизнь',
    text: 'Немного обо мне вне работы — [добавь пару слов о себе: характер, ритм жизни, что важно].',
    bullets: [
      'Быстро учусь и довожу до результата',
      'Спокойная коммуникация без лишнего шума',
      '[что-то личное — например: семья, город, ритм]'
    ],
    gallery: [
      { src: lokiAstridPhoto, alt: 'Астрид и Локи' },
      { src: lokiPhoto, alt: 'Локи' },
      { src: photoMain, alt: 'Я' }
    ]
  },
  journey: {
    title: 'Как пришёл в разработку',
    text: 'История перехода и роста — что зацепило в разработке и как шёл к коммерческим проектам.',
    bullets: [
      '[первый интерес к программированию — откуда]',
      'Самообучение и первые проекты',
      '2020: первая коммерция, старт в Амадо'
    ]
  },
  interests: {
    title: 'Интересы',
    text: '[Расскажи что делаешь вне работы — хобби, увлечения, что заряжает].',
    bullets: ['[интерес 1]', '[интерес 2]', '[интерес 3]']
  },
  skills: {
    title: 'Как работаю с людьми',
    text: 'Без героизма, но стабильно — это про коммуникацию в команде.',
    bullets: [
      'Уточняю ожидания до начала, а не после',
      'Менторил junior-разработчиков в двух компаниях',
      'Провожу code review вдумчиво, не формально'
    ]
  },
  contacts: {
    title: 'На связи',
    text: 'Можно написать просто пообщаться, задать вопрос или предложить коллаборацию.'
  }
};
