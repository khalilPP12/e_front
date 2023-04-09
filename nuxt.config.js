import i18n from "./plugins/i18n";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "MaG Store",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo_blanc.ico" }],
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  ssr: false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/i18n.js" }, { src: "~/plugins/axios" },
  { src: "~/plugins/skeleton", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@braid/vue-formulate/nuxt'],
  module: {},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            name: "En",
          },
          {
            code: "fr",
            name: "Fr",
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],
  i18n: {
    /* module options */
    locales: ["en", "fr"],
    defaultLocale: "fr",
    detectBrowserLanguage: false,
  },
  auth: {
    // Options
  },
  axios: {
    baseURL: process.env.BASE_URL,
    responseType: "json",
    common: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    proxy: true,
  },
  proxy: {
    "/api/": {
      target: process.env.BASE_URL,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: "#000",
    height: "5px",
    css: true,
  },
};
