export type TTechItem = {
  name: string;
  icon: string;
};

export type TTechList = {
  title: string;
  items: TTechItem[];
};

const MOCK_DATA: TTechList[] = [
  {
    title: 'Языки',
    items: [
      {
        name: 'HTML',
        icon: 'tech/html'
      },
      {
        name: 'CSS',
        icon: 'tech/css'
      },
      {
        name: 'SCSS',
        icon: 'tech/sass'
      },
      {
        name: 'JavaScript',
        icon: 'tech/js'
      },
      {
        name: 'TypeScript',
        icon: 'tech/ts'
      },
      {
        name: 'PHP',
        icon: 'tech/php'
      }
    ]
  },
  {
    title: 'Библиотеки и фреймворки',
    items: [
      {
        name: 'Vue',
        icon: 'tech/vue'
      },
      {
        name: 'Vuex',
        icon: 'tech/vue-library'
      },
      {
        name: 'Pinia',
        icon: 'tech/pinia'
      },
      {
        name: 'Vue Router',
        icon: 'tech/vue-library'
      },
      {
        name: 'Nuxt.js',
        icon: 'tech/nuxt'
      },
      {
        name: 'React',
        icon: 'tech/react'
      },
      {
        name: 'Redux',
        icon: 'tech/redux'
      },
      {
        name: 'React Router Dom',
        icon: 'tech/react-router'
      },
      {
        name: 'Vite',
        icon: 'tech/vite'
      },
      {
        name: 'Webpack',
        icon: 'tech/webpack'
      },
      {
        name: 'Tailwind',
        icon: 'tech/tailwind'
      },
      {
        name: 'Vuetify',
        icon: 'tech/vuetify'
      },
      {
        name: 'ESlint',
        icon: 'tech/eslint'
      },
      {
        name: 'Stylelint',
        icon: 'tech/stylelint'
      }
    ]
  },
  {
    title: 'Бэкэнд',
    items: [
      {
        name: 'GraphQl',
        icon: 'tech/graph-ql'
      },
      {
        name: 'Apollo',
        icon: 'tech/apollo'
      },
      {
        name: 'Firebase',
        icon: 'tech/firebase'
      },
      {
        name: 'Node.js',
        icon: 'tech/node'
      }
    ]
  },
  {
    title: 'Инструменты и технологии',
    items: [
      {
        name: 'Git',
        icon: 'tech/git'
      },
      {
        name: 'Docker',
        icon: 'tech/docker'
      },
      {
        name: 'Figma',
        icon: 'tech/figma'
      },
      {
        name: 'Postman',
        icon: 'tech/postman'
      },
      {
        name: 'PWA',
        icon: 'tech/pwa'
      }
    ]
  }
];

export default MOCK_DATA;
