<template>
  <div class="main-layout">
    <app-header />

    <router-view />

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AppHeader from "common/app-header";

import useAuthUserStore from "modules/auth/store/use-auth-user-store";

defineOptions({
  name: "main-layout",
});

const authUserStore = useAuthUserStore();

onMounted(async () => {
  try {
    await authUserStore.fetchCurrentAuthUser();
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  background-color: $color-black;

  & main {
    flex: 1;
    padding-top: 60px;
    padding-bottom: 68px;
  }
}
</style>
