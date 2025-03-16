<template>
  <form class="login-form" @submit.prevent="onLogin">
    <div class="login-form__content">
      <base-input
        id="login"
        v-model="form.login"
        label-text="Логин"
        placeholder="Введите Ваш логин"
        class="login-form__field"
      />

      <base-input
        id="password"
        v-model="form.password"
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
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import BaseButton from "ui/base-button";
import BaseInput from "ui/base-input";

defineOptions({
  name: "login-form",
});

const emits = defineEmits<{
  (e: "success-login", accessToken: string): void;
}>();

const form = reactive({
  login: "",
  password: "",
});
const isFormLoading = ref(false);

const onLogin = async () => {
  if (isFormLoading.value) return;

  isFormLoading.value = true;

  try {
    emits("success-login", "access-token");
  } catch (error) {
    // TODO: сделать нормальную обработку ошибок
    console.log(error);
  } finally {
    isFormLoading.value = false;
  }
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
  }

  &__footer {
  }

  &__submit-btn {
    width: 100%;
  }
}
</style>
