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
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    strategy: "no_prefix",   // 使用更改語系不要改網址的模式

    locales: [              // 語系 json 名稱設定及載入
      {
        code: "zh-TW",
        file: "zh-TW.json",
      },
      {
        code: "en-US",
        file: "en-US.json",
      },
      {
        code: "ja-JP",
        file: "ja-JP.json",
      },
    ],
    langDir: "language",         // 放置語系檔案的資料夾名稱
    defaultLocale: "zh-TW",      // 預設語系
    detectBrowserLanguage: {
      useCookie: true,           // 啟用 cookie 紀錄語系 
    },
  },
})