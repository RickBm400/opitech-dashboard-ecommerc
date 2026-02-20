import { createApp } from 'vue';
import { router } from './routes';
import App from './layouts/App.vue';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './assets/css/index.css';

createApp(App).use(router).use(vuetify).mount('#app');
