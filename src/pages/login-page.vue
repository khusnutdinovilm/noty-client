<template>
  <auth-page-template page-title="Добро пожаловать" page-subtitle="Введите ваш логин и пароль">
    <template #auth-page-template-icon>
      <lock-icon />
    </template>
  </auth-page-template>
</template>

<script setup lang="ts">
import LockIcon from "icons/lock-icon.vue";

import AuthPageTemplate from "shared/auth-page-template";

defineOptions({
  name: "login-page",
});
</script>
