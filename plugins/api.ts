import { OpenAPI as UserAPI } from "~/services/user";
import { OpenAPI as PostAPI } from "~/services/post";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  UserAPI.BASE = config.public.restApiBaseUrl;
  PostAPI.BASE = config.public.restApiBaseUrl;
  console.log("user rest Api Base Url:", UserAPI.BASE);
  console.log("post rest Api Base Url:", PostAPI.BASE);
});
