<template>
  <main class="auth-page-template">
    <div class="auth-page-template__header">
      <div class="auth-page-template__icon-block">
        <slot name="auth-page-template-icon" />
      </div>

      <div class="auth-page-template__text">
        <div class="auth-page-template__title">
          {{ pageTitle }}
        </div>

        <div class="auth-page-template__subtitle">
          {{ pageSubtitle }}
        </div>
      </div>
    </div>

    <div class="auth-page-template__body">
      <slot name="auth-page-template-body" />
    </div>
  </main>
</template>

<script setup lang="ts">
defineOptions({
  name: "auth-page-template",
});

defineProps<{
  pageTitle: string;
  pageSubtitle: string;
}>();
</script>
