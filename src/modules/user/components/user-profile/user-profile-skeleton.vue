<template>
  <div class="user-profile user-profile--skeleton">
    <app-skeleton type="circle" width="48px" height="48px" />

    <div class="user-profile__user-info">
      <app-skeleton width="100px" height="16px" />

      <app-skeleton width="150px" height="16px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSkeleton from "common/app-skeleton";

defineOptions({
  name: "user-profile-skeleton",
});
</script>
