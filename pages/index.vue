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

const { $hello } = useNuxtApp();

</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ $hello("Mike 老師") }}</h2>

    <div>
      <NuxtLink to="/about">關於我們</NuxtLink>
      <NuxtLink to="/address">聯絡地址</NuxtLink>
      <NuxtLink to="/courses/123/about">課程列表</NuxtLink>
      <NuxtLink to="/user-mike">使用者頁面</NuxtLink>
    </div>
  </div>
</template>

<style></style>
