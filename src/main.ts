import { createApp } from 'vue';
import '@/assets/style/index.scss';
import { router } from '@/router';

import pinia from '@/store';

import App from './App.vue';

// Create vue app
const app = createApp(App);

// setup icons
const modules = import.meta.glob('./assets/icons/*.svg');
Object.values(modules).forEach(async (el) => {
  await el();
});

// Register plugins
app.use(router);
app.use(pinia);

// Mount vue app
app.mount('#app');
