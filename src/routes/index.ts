import { createRouter, createMemoryHistory } from 'vue-router';

import Pages from '../pages/index.ts';

const routes = [
  {
    path: '/',
    name: Pages.Dashboard.__name,
    component: Pages.Dashboard,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
