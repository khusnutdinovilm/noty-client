import { defineStore } from "pinia";

import authService from "modules/auth/services/auth-service";
import type { ILoginCredentials } from "modules/auth/types/credentials";

const useAuthStore = defineStore("auth-store", () => {
  const login = async (loginCredentials: ILoginCredentials): Promise<{ accessToken: string }> => {
    const { data: responseData } = await authService.login(loginCredentials);
    const { accessToken } = responseData;

    return { accessToken };
  };

  return {
    login,
  };
});

export default useAuthStore;
