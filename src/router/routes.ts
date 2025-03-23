import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/main-layout.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "",
        name: "home-page",
        component: () => import("pages/home-page.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/auth-layout.vue"),
    children: [
      {
        path: "login",
        name: "login-page",
        component: () => import("pages/auth/login-page.vue"),
      },
      {
        path: "register",
        name: "register-page",
        component: () => import("pages/auth/register-page.vue"),
      },
    ],
  },
];

export default routes;
