<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <router-link :to="{ name: 'home-page' }" class="app-header__logo">
          <img src="assets/images/main-logo.png" alt="" class="app-header__logo-image" />
        </router-link>

        <nav-menu v-if="isRoleAdmin" class="app-header__nav" />

        <div class="app-header__right">
          <user-profile :user-info="userInfo" with-email class="app-header__user-profile" />

          <div class="app-header__logout" @click.prevent="onLogout">
            <logout-icon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import LogoutIcon from "icons/logout-icon.vue";

import NavMenu from "common/nav-menu";

import UserProfile from "modules/user/components/user-profile";
import type { IUser } from "modules/user/types/user";

defineOptions({
  name: "app-header",
});

const userInfo = reactive<IUser>({
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  image: "https://dummyjson.com/icon/emilys/128",
  email: "emily.johnson@x.dummyjson.com",
  role: "admin",
});

const isRoleAdmin = ref(userInfo.role === "admin");

const onLogout = () => {
  console.log("logout");
};
</script>
