import { OpenAPI as UserAPI } from "~/services/user";

export default defineNuxtPlugin((event) => {
  const config = useRuntimeConfig(event);
  UserAPI.BASE = config.public.restApiBaseUrl;
  console.log("client rest Api Base Url:", UserAPI.BASE);
});
