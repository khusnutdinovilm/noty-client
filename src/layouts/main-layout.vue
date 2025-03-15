<template>
  <div class="main-layout">
    <header></header>

    <router-view />

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
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
  }
}
</style>
