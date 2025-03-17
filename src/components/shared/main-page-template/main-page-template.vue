<template>
  <main class="main-page-template">
    <div class="main-page-template__header container">
      <div class="main-page-template__title">
        {{ pageTitle }}
      </div>

      <div v-if="$slots['page-actions']" class="main-page-template__page-actions">
        <slot name="page-actions" />
      </div>
    </div>

    <div class="main-page-template__content container" :class="pageContentClasses">
      <slot v-if="isContentLoading && $slots['content-loading']" name="content-loading" />
      <slot v-else-if="isContentEmpty && $slots['content-empty']" name="content-empty" />
      <slot v-else name="content" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "main-page-template",
});

const props = defineProps<{
  pageTitle: string;
  isContentLoading?: boolean;
  isContentEmpty?: boolean;
}>();

const pageContentClasses = computed(() => ({
  "main-page-template__content--loading": props.isContentLoading,
  "main-page-template__content--empty": props.isContentEmpty,
}));
</script>
