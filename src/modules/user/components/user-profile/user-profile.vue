<template>
  <div class="user-profile">
    <div class="user-profile__image">
      <img v-if="userInfo.image" :src="userInfo.image" :alt="`${userFullName} image`" />
      <template v-else>
        {{ userInitials }}
      </template>
    </div>

    <div class="user-profile__user-info">
      <div class="user-profile__fullname">
        {{ userFullName }}
      </div>

      <div v-if="withEmail" class="user-profile__email">
        {{ userInfo.email }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { IUser } from "modules/user/types/user";

defineOptions({
  name: "user-profile",
});

const props = defineProps<{
  userInfo: IUser;
  withEmail?: boolean;
}>();

const userInitials = computed(
  () =>
    `${props.userInfo.firstName[0].toUpperCase() || ""}${props.userInfo.lastName[0].toUpperCase()}`,
);

const userFullName = computed(() => `${props.userInfo.firstName} ${props.userInfo.lastName}`);
</script>
