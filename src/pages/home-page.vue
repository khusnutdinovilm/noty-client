<template>
  <main-page-template
    :page-title="pageTitle"
    :is-content-loading="isContentLoading"
    :is-content-empty="isContentEmpty"
  >
    <template v-if="!isRoleAdmin" #page-actions>
      <base-button label-text="Новая заметка +" />
    </template>

    <template #content-loading> loading </template>

    <template #content-empty> empty </template>

    <template #content> content </template>
  </main-page-template>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

import BaseButton from "ui/base-button";

import MainPageTemplate from "shared/main-page-template";

import type { IUser } from "modules/user/types/user";

defineOptions({
  name: "home-page",
});

const userInfo = reactive<IUser>({
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  image: "https://dummyjson.com/icon/emilys/128",
  email: "emily.johnson@x.dummyjson.com",
  role: "user",
});

const isRoleAdmin = ref(userInfo.role === "admin");

const pageTitle = computed(() => (isRoleAdmin.value ? "Заметки пользователей" : "Ваши заметки"));

const isContentLoading = ref(true);
const isContentEmpty = ref(true);
</script>
