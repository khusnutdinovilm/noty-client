<template>
  <auth-page-template
    page-title="Добро пожаловать"
    page-subtitle="Введите данные ниже"
    class="register-page"
  >
    <template #auth-page-template-icon>
      <lock-icon />
    </template>

    <template #auth-page-template-body>
      <register-form @success-register="onSuccessRegister" />
    </template>
  </auth-page-template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import LockIcon from "icons/lock-icon.vue";

import AuthPageTemplate from "shared/auth-page-template";

import RegisterForm from "modules/auth/components/forms/register-form.vue";

defineOptions({
  name: "register-page",
});

const router = useRouter();

const onSuccessRegister = () => {
  router.push({
    name: "login-page",
  });
};
</script>

<style lang="scss">
.register-page {
  & .auth-page-template__body {
    width: 360px;
  }
}
</style>
