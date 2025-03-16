<template>
  <auth-page-template
    page-title="Добро пожаловать"
    page-subtitle="Введите ваш логин и пароль"
    class="login-page"
  >
    <template #auth-page-template-icon>
      <lock-icon />
    </template>

    <template #auth-page-template-body>
      <login-form @success-login="onSuccessLogin" />
    </template>
  </auth-page-template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import LockIcon from "icons/lock-icon.vue";

import AuthPageTemplate from "shared/auth-page-template";

import LoginForm from "modules/auth/components/forms/login-form.vue";

defineOptions({
  name: "login-page",
});

const router = useRouter();

const onSuccessLogin = (accessToken: string) => {
  localStorage.setItem("access-token", accessToken);
  router.replace({ name: "home-page" });
};
</script>

<style lang="scss">
.login-page {
  & .auth-page-template__body {
    width: 100%;
  }
}
</style>
