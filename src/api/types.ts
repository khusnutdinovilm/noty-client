import type { AxiosResponse } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;
export type ApiResult<T> = Promise<ApiResponse<T>>;
