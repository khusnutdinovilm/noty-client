import { defineStore } from "pinia";

import authService from "modules/auth/services/auth-service";
import type { ILoginCredentials, IRegisterCredentials } from "modules/auth/types/credentials";
import type { IRegisterResponse } from "modules/auth/types/service";

const useAuthStore = defineStore("auth-store", () => {
  const login = async (loginCredentials: ILoginCredentials): Promise<{ accessToken: string }> => {
    const { data: responseData } = await authService.login(loginCredentials);
    const { accessToken } = responseData;

    return { accessToken };
  };

  const register = async (
    registerCredentials: IRegisterCredentials,
  ): Promise<IRegisterResponse> => {
    const { data: responseData } = await authService.register(registerCredentials);
    return responseData;
  };

  return {
    login,
    register,
  };
});

export default useAuthStore;
