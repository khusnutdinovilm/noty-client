<template>
  <div ref="appSkeletonRef" class="app-skeleton"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineOptions({
  name: "app-skeleton",
});

const props = defineProps<{
  width?: string;
  height?: string;
  type?: "circle" | "text";
}>();

const appSkeletonRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (appSkeletonRef.value) {
    if (props.width) {
      appSkeletonRef.value.style.setProperty("--skeleton-width", props.width);
    }

    if (props.height) {
      appSkeletonRef.value.style.setProperty("--skeleton-height", props.height);
    }

    if (props.type === "circle") {
      appSkeletonRef.value.style.setProperty("--skeleton-border-radius", "50%");
    }
  }
});
</script>
