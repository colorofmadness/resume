import { createApp } from 'vue';

import '@app/styles/index.pcss';
import { router } from '@app/providers/router';
import pinia from '@app/providers/store';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
