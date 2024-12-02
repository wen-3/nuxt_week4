<script setup lang="ts"></script>

<template>
  <div>
    <header></header>
    <h1>Layout: default</h1>
    <slot />
  </div>
</template>

<style scoped>
header {
  width: 100vw;
  height: 50px;
  background-color: lightgreen;
}
</style>
