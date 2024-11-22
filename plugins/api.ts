import { OpenAPI as UserAPI } from "~/services/user";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  UserAPI.BASE = config.public.restApiBaseUrl;
  console.log("restApiBaseUrl:", UserAPI.BASE);
});