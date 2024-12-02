<script setup lang="ts"></script>

<template>
  <div>
    <header></header>
    <h1>Layout: custom.vue</h1>
    <slot />
  </div>
</template>

<style scoped>
header {
  width: 100vw;
  height: 50px;
  background-color: rgb(235, 238, 144);
}
</style>
