<template>
  <form class="login-form" @submit.prevent="onLogin">
    <div class="login-form__content">
      <base-input
        id="username"
        v-model="loginForm.email"
        label-text="Логин"
        placeholder="Введите Ваш email"
        class="login-form__field"
      />

      <base-input
        id="password"
        v-model="loginForm.password"
        label-text="Password"
        type="password"
        placeholder="Введите Ваш пароль"
        class="login-form__field"
      />
    </div>

    <div class="login-form__footer">
      <base-button
        label-text="Войти"
        type="submit"
        :loading="isFormLoading"
        class="login-form__submit-btn"
      />

      <base-button label-text="Регистрация" btn-type="secondary" @click="goToRegisterPage" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import BaseButton from "ui/base-button";
import BaseInput from "ui/base-input";

import useAuthStore from "modules/auth/store/use-auth-store";
import type { ILoginCredentials } from "modules/auth/types/credentials";

defineOptions({
  name: "login-form",
});

const emits = defineEmits<{
  (e: "success-login", accessToken: string): void;
}>();

const router = useRouter();

const authStore = useAuthStore();

const loginForm = reactive<ILoginCredentials>({
  email: "",
  password: "",
});
const isFormLoading = ref(false);

const onLogin = async () => {
  if (isFormLoading.value) return;

  isFormLoading.value = true;

  try {
    const { accessToken } = await authStore.login(loginForm);
    emits("success-login", accessToken);
  } catch (error) {
    // TODO: сделать нормальную обработку ошибок
    console.log(error);
  } finally {
    isFormLoading.value = false;
  }
};

const goToRegisterPage = () => {
  router.push({ name: "register-page" });
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__content,
  &__footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
