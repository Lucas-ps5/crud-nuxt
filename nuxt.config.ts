// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  tailwindcss: {
    cssPath: ["~/assets/index.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
    editorSupport: true
  },
  runtimeConfig: {
    public: {
      restApiBaseUrl: process.env.NUXT_REST_API_BASE_URL, // can be overridden by NUXT_API_SECRET environment variable
    }
  },
  plugins: ["~/plugins/api.ts"],
});
