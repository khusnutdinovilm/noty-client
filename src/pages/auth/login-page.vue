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
import useAuthUserStore from "modules/auth/store/use-auth-user-store";

defineOptions({
  name: "login-page",
});

const router = useRouter();

const authUserStore = useAuthUserStore();

const onSuccessLogin = (accessToken: string) => {
  authUserStore.saveAccessToken(accessToken);
  router.replace({ name: "home-page" });
};
</script>

<style lang="scss">
.login-page {
  & .auth-page-template__body {
    width: 360px;
  }
}
</style>
