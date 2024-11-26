// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
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
      restApiBaseUrl: process.env.NUXT_REST_API_BASE_URL
    }
  },
  plugins: ["~/plugins/api.ts"]
});
