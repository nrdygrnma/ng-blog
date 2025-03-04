// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@una-ui/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css", "~/assets/css/reset.css"],
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },
});
