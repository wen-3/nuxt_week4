<script setup>
// definePageMeta({
//   middleware: (to, from) => {
//     console.log("address=>", { to, from });
//   },
// });

const addressStore = useAddressStore();
console.log(addressStore);
console.log(addressStore.count);


</script>

<template>
  <div>
    <h2>店家地址</h2>

    <NuxtLink to="/">回到首頁</NuxtLink>
    <NuxtLink to="/about">關於我們</NuxtLink>
  </div>
</template>

<style></style>