import type { ApiResult } from "api/types";

import type { IUser } from "modules/user/types/user";

interface ILoginResponse extends IUser {
  accessToken: string;
  refreshToken: string;
}

export type LoginResult = ApiResult<ILoginResponse>;

export type AuthMeResult = ApiResult<IUser>;
