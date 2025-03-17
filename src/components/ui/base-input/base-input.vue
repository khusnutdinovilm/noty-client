<template>
  <div class="base-input">
    <label :for="id" class="base-input__label">
      {{ labelText }}
    </label>

    <input
      :id="id"
      v-model.trim="model"
      :type="type"
      class="base-input__field"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import type { IBaseInputProps } from "./types";

defineOptions({
  name: "base-input",
});

const { type = "text" } = defineProps<IBaseInputProps>();

const model = defineModel<string>({ required: true });
const input = ref<string>(model.value);
watch(input, newValue => {
  model.value = newValue;
});
</script>
