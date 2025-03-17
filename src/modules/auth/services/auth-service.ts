import type { AxiosInstance } from "axios";

import api from "api/api";
import BaseHttpService from "api/http-service";

import type { ILoginCredentials } from "modules/auth/types/credentials";
import type { AuthMeResult, LoginResult } from "modules/auth/types/service";

class AuthService extends BaseHttpService {
  constructor(api: AxiosInstance) {
    super(api);
  }

  async login(loginCredentials: ILoginCredentials): LoginResult {
    return this.api.post("/auth/login", loginCredentials);
  }

  async getCurrentAuthUser(): AuthMeResult {
    return this.api.get("/auth/me");
  }
}

export default new AuthService(api);
