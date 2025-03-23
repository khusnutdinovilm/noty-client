<template>
  <form class="register-form" @submit.prevent="onRegister">
    <div class="register-form__content">
      <base-input
        id="first-name"
        v-model="form.firstName"
        placeholder="Введите Ваше имя"
        class="register-form__field"
      />

      <base-input
        id="last-name"
        v-model="form.lastName"
        placeholder="Введите Вашу фамилию"
        class="register-form__field"
      />

      <base-input
        id="email"
        v-model="form.email"
        placeholder="Введите Вашу почту"
        class="register-form__field"
      />

      <base-input
        id="password"
        v-model="form.password"
        type="password"
        placeholder="Придумайте пароль"
        class="register-form__field"
      />

      <base-input
        id="confirm-password"
        v-model="form.confirmPassword"
        type="password"
        placeholder="Повторите пароль"
        class="register-form__field"
      />
    </div>

    <div class="register-form__footer">
      <base-button
        label-text="Зарегистрироваться"
        type="submit"
        :loading="isFormLoading"
        class="login-form__submit-btn"
      />

      <base-button
        label-text="У меня уже есть аккаунт"
        btn-type="terciary-primary"
        @click="goToLoginPage"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import BaseButton from "ui/base-button";
import BaseInput from "ui/base-input";

import useAuthStore from "modules/auth/store/use-auth-store";
import type { IRegisterCredentials } from "modules/auth/types/credentials";

defineOptions({
  name: "register-form",
});

const emits = defineEmits<{
  (e: "success-register"): void;
}>();

const router = useRouter();

const authStore = useAuthStore();

const isFormLoading = ref(false);

const form = reactive<IRegisterCredentials>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const onRegister = async () => {
  try {
    await authStore.register(form);
    emits("success-register");
  } catch (error) {
    console.log(error);
  } finally {
    isFormLoading.value = false;
  }
};

const goToLoginPage = () => {
  router.push({ name: "login-page" });
};
</script>

<style lang="scss">
.register-form {
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
