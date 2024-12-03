<script setup>
import { storeToRefs } from "pinia";
// definePageMeta({
//   middleware: (to, from) => {
//     console.log("address=>", { to, from });
//   },
// });

const store = useAddressStore();

const { getDataList, setId } = store;

const { IdTitle, roomArr} = storeToRefs(store);

const changeId = () => {
  setId();
};

</script>

<template>
  <div>
    <h2>店家地址</h2>

    <h3>{{ IdTitle }}</h3>
    <pre>
      {{ roomArr }}
    </pre>

    <div>
      <button @click="getDataList">click</button>
      <button @click="changeId">改變id</button>
      <NuxtLink to="/">回到首頁</NuxtLink>
      <NuxtLink to="/about">關於我們</NuxtLink>
    </div>
  </div>
</template>

<style></style>