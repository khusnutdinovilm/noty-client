import { defineStore } from "pinia";
import { computed, ref } from "vue";

import authService from "modules/auth/services/auth-service";
import type { IUser } from "modules/user/types/user";

const useAuthUserStore = defineStore("auth-user-store", () => {
  const authUser = ref<IUser | null>(null);

  const isRoleAdmin = computed(() => authUser.value?.role === "admin");

  const fetchCurrentAuthUser = async () => {
    const { data: resData } = await authService.getCurrentAuthUser();
    authUser.value = resData;
  };

  const saveAccessToken = (accessToken: string): void => {
    localStorage.setItem("access-token", accessToken);
  };

  const removeAccessToken = (): void => {
    localStorage.removeItem("access-token");
  };

  return {
    authUser,
    isRoleAdmin,
    fetchCurrentAuthUser,
    saveAccessToken,
    removeAccessToken,
  };
});

export default useAuthUserStore;
