import { createApp } from 'vue';
import { router } from './routes';
import App from './layouts/App.vue';
import './assets/css/index.css';
import vuetify from './plugins/vuetify';

createApp(App).use(router).use(vuetify).mount('#app');
