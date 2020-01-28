import { NuxtAxiosInstance } from "@nuxtjs/axios";

export default interface RootState {
  version: string;
  $axios: NuxtAxiosInstance;
}
