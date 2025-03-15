<template>
  <div class="auth-layout">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "auth-layout",
});
</script>

<style lang="scss">
.auth-layout {
  @include flex-center;

  min-height: 100dvh;
  background-color: $color-black;

  & main {
    padding: 24px;
    border-radius: 12px;
    background-color: $color-gray-dark;
  }
}
</style>
