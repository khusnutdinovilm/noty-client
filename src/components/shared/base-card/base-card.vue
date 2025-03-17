<template>
  <div class="base-card">
    <div class="base-card__content">
      <div class="base-card__title">
        {{ title }}
      </div>

      <div class="base-card__description">
        {{ description }}
      </div>
    </div>

    <div class="base-card__footer">
      <slot name="base-card-footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "base-card",
});

defineProps<{
  title: string;
  description: string;
}>();
</script>
