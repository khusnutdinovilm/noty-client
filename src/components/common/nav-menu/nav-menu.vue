<template>
  <nav class="nav-menu">
    <router-link
      v-for="link in menuLinks"
      :key="link.name"
      :to="{ name: link.name }"
      class="nav-menu__link"
    >
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: "nav-menu",
});

const menuLinks = [
  {
    name: "home-page",
    title: "Заметки пользователей",
  },
  {
    name: "home-page",
    title: "Пользователи",
  },
];
</script>
