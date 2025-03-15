import type { RouteRecordRaw } from "vue-router";

import HomePage from "pages/home-page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

export default routes;
