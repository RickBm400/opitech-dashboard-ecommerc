import { createRouter, createMemoryHistory } from 'vue-router';

import Pages from '../pages/index.ts';

const routes = [
  {
    path: '/',
    name: Pages.Dashboard.__name,
    component: Pages.Dashboard,
  },
];

console.log(routes);

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
