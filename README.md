# 💻 Резюме

## Требования для запуска в локальной среде:

- Node js 22.18.0 версии или выше
- Пакетный менеджер yarn. Установка: https://yarnpkg.com/getting-started/install

## Используемые команды:

Установка зависимостей:

```
yarn install
```

Запуск локального сервера:

```
yarn dev
```

Запуск билда:

```
yarn build
```

## Структура проекта

```
./
└── src # Весь исходный код проекта
    ├── app # (Слой Приложения) Точка входа, инициализация провайдеров, роутинга
    │   ├── App.vue
    │   ├── main.ts # Инициализация Pinia, Router и глобальных стилей
    │   ├── providers # Настройка Router и Store
    │   │   ├── router/
    │   │   └── store/
    │   └── styles # Точка сбора глобальных стилей
    │
    ├── pages # (Слой Страниц) Соответствует URL-маршрутам. Собирает виджеты и фичи.
    │   ├── AboutPage # /about
    │   │   └── ui/AboutPage.vue
    │   ├── ContactsPage # /contacts
    │   │   └── ui/ContactsPage.vue
    │   └── ProjectsPage # /projects (и другие страницы-блоки)
    │       └── ui/ProjectsPage.vue
    │
    ├── widgets # (Слой Виджетов) Сложные, переиспользуемые блоки и макеты
    │   ├── Header # Шапка сайта (Бывший v-header)
    │   ├── DefaultLayout # Главная обертка страниц (Бывший default-layout)
    │   └── FrameTop # Часть оформления окна
    │
    ├── features # (Слой Фич) Пользовательские сценарии
    │   ├── PageTabs # Переключение между страницами/вкладками
    │   ├── ThemeSwitcher # Смена темы
    │   └── Breadcrumbs # Навигационная цепочка
    │
    ├── entities # (Слой Сущностей) Объекты предметной области
    │   ├── ExperienceItem # Единица опыта
    │   │   ├── ui/Card.vue
    │   │   └── model/const.ts # Данные опыта
    │   └── Tech # Список технологий
    │       └── ui/TechList.vue
    │
    └── shared # (Слой Общего кода) Атомарные, универсальные элементы (UI Kit, утилиты)
        ├── assets # Изображения, иконки, шрифты (Бывший src/assets/)
        ├── config # Общая конфигурация (Например, константы роутов)
        │   └── routes.ts 
        ├── lib # Библиотека функций
        │   ├── composables # Общие хуки (useScreenSize)
        │   └── utils # Чистые хелперы (format.ts)
        └── ui # UI Kit (Атомарные компоненты)
            ├── VButton
            ├── VIcon
            └── VTitle
```
