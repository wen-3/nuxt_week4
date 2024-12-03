<script setup>
import { storeToRefs } from "pinia";
// definePageMeta({
//   middleware: (to, from) => {
//     console.log("address=>", { to, from });
//   },
// });

const addressStore = useAddressStore();

const { count } = storeToRefs(addressStore);

const { addCount, info } = addressStore;

// console.log(addressStore);
console.log(count);

</script>

<template>
  <div>
    <h2>店家地址</h2>
    index: {{ info.index }}
    <h3>count: {{ count }}</h3>

    <div>
      <button @click="addCount">click</button>
      <NuxtLink to="/">回到首頁</NuxtLink>
      <NuxtLink to="/about">關於我們</NuxtLink>
    </div>
  </div>
</template>

<style></style>