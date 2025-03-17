<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <router-link :to="{ name: 'home-page' }" class="app-header__logo">
          <img src="assets/images/main-logo.png" alt="" class="app-header__logo-image" />
        </router-link>

        <nav-menu v-if="authUserStore.isRoleAdmin" class="app-header__nav" />

        <div class="app-header__right">
          <user-profile-skeleton v-if="!authUserStore.authUser" />
          <user-profile
            v-else
            :user-info="authUserStore.authUser"
            with-email
            class="app-header__user-profile"
          />

          <div class="app-header__logout" @click.prevent="onLogout">
            <logout-icon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import LogoutIcon from "icons/logout-icon.vue";

import NavMenu from "common/nav-menu";

import useAuthUserStore from "modules/auth/store/use-auth-user-store";
import { UserProfile, UserProfileSkeleton } from "modules/user/components/user-profile";

defineOptions({
  name: "app-header",
});

const router = useRouter();

const authUserStore = useAuthUserStore();

const onLogout = () => {
  authUserStore.removeAccessToken();
  router.replace({ name: "login-page" });
};
</script>
