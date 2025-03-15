import type { AxiosInstance } from "axios";

export default class BaseHttpService {
  constructor(protected api: AxiosInstance) {}
}
