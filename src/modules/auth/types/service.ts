import type { ApiResult } from "api/types";

interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  accessToken: string;
  refreshToken: string;
}

export type LoginResult = ApiResult<ILoginResponse>;
