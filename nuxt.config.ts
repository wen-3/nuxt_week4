// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // "runtimeConfig": {
  //   "TOKEN": '',
  //   "public": {
  //     "API_URL": '',
  //   }
  // },
  "vite": {
    "define": {
      "process.env": process.env,
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 直播",
      "meta": [
        { "name": "description", "content": "Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些..." },
        { "property": "og:title", "content": "Nuxt3 直播" },
        { "property": "og:description", "content": "Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些..." },
      ],
    }
  },
  modules: ["@pinia/nuxt"],
})
