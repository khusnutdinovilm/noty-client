<template>
  <button :type="type" class="base-button" :class="btnClasses">
    <template v-if="!loading">
      <div v-if="$slots.prepend" class="base-button__prepend">
        <slot name="prepend" />
      </div>

      <div v-if="!labelText" class="base-button__content">
        <slot />
      </div>
      <div v-else class="base-button__content">
        {{ labelText }}
      </div>

      <div v-if="$slots.append" class="base-button__append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <div class="base-button__loader"></div>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { IBaseButtonProps } from "./types";

defineOptions({
  name: "base-button",
});

const { btnType = "primary", type = "button" } = defineProps<IBaseButtonProps>();

const btnClasses = computed(() => ({
  "base-button--primary": btnType === "primary",
  "base-button--secondary": btnType === "secondary",
  "base-button--danger": btnType === "danger",
}));
</script>
