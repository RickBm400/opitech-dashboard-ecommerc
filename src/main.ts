import { createApp } from 'vue';
import { router } from './routes';
import App from './layouts/App.vue';

createApp(App).use(router).mount('#app');
