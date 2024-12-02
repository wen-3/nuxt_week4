<script setup>
const text = ref("");

definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

useSeoMeta({
  title: () => `${text.value} 關於我們 About`,
  description: "About Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...",
  ogDescription: "About Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...",
  ogTitle: "About Nuxt3 直播",
  ogImage: `/logo.png`,
  twitterTitle: "About Nuxt3 直播",
  twitterDescription: "About Vue 是屬於前端框架，主要著重在瀏覽器渲染，而有些...",
  twitterCard: "summary_large_image",
  twitterImage: `/logo.png`,
});
</script>

<template>
  <div>
    <h2>關於我們</h2>
    <input v-model="text" type="text" />

    <div>
      <NuxtLink to="/">回到首頁</NuxtLink>
      <NuxtLink to="/address">聯絡地址</NuxtLink>
    </div>

    <br>

    <div class="nav">
      <NuxtLink to="/about">about index</NuxtLink>
      <NuxtLink to="/about/a">about a</NuxtLink>
      <NuxtLink to="/about/b">about b</NuxtLink>
    </div>

    <div class="box_page">
      <NuxtPage></NuxtPage>
    </div>

  </div>
</template>

<style>
.nav>a {
  display: block;
  margin: 0 10px;
}

.box_page {
  width: 800px;
  height: 400px;
  background-color: #ddd;
}
</style>
