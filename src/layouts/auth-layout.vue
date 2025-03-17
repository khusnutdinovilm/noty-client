<template>
  <div class="auth-layout">
    <router-view />
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
}
</style>
