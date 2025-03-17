import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
});

router.beforeEach(to => {
  const token = localStorage.getItem("access-token");
  const isAuthenticated = Boolean(token);

  if (to.name !== "login-page") {
    const authRequired = to.meta.auth;

    if (authRequired && !isAuthenticated) {
      return {
        name: "login-page",
      };
    }
  } else {
    if (isAuthenticated) {
      return {
        name: "home-page",
      };
    }
  }
});

export default router;
