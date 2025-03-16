<template>
  <div class="main-layout">
    <app-header />

    <router-view />

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "common/app-header";

defineOptions({
  name: "main-layout",
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
