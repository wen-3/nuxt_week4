<script setup>
const route = useRoute();
</script>

<template>
    <div>
        <h2>這是 {{ route.params.name }} 個人頁面</h2>
    </div>
</template>

<style></style>