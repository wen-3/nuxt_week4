<script setup>
useHead({
  title: 'Nuxt3 直播的首頁',
  meta: [
    { name: 'description', content: 'Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...' },
    { property: 'og:title', content: 'Nuxt3 直播' },
    { property: 'og:description', content: 'Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...' },
    { property: 'og:image', content: `/logo.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '600' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nuxt3 直播' },
    { name: 'twitter:description', content: 'Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...' },
    { name: 'twitter:image', content: `/logo.png` },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});

// console.log(process.env.WEB_URL);

// const config = useRuntimeConfig();
// console.log("config=>", config);
// console.log("config.public=>", config.public);

// if (process.server) {
//   console.log("server token:", config.TOKEN);
// }

// if (process.client) {
//   console.log("A");
// }

if (import.meta.client) {
  // 在 client 端
  console.log("在 client 端");
} else {
  // 在 server 端
  console.log("在 server 端");
}

// onMounted(() =>{
//   console.log("A");
// })
</script>

<template>
  <div>
    <h1>首頁</h1>

    <ClientOnly>
      <h1>這邊只會在 Client 端出現</h1>
    </ClientOnly>

    <DevOnly>
      <h1>這邊只會在 dev 模式會出現</h1>
    </DevOnly>

    <NuxtLink to="/about">關於我們</NuxtLink>
    <NuxtLink to="/address">聯絡地址</NuxtLink>
    <NuxtLink to="/courses/123/about">課程列表</NuxtLink>
    <NuxtLink to="/user-mike">使用者頁面</NuxtLink>
  </div>
</template>

<style></style>
