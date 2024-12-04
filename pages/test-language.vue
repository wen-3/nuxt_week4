<script setup>
const { locale, setLocaleCookie } = useI18n();
watch(locale, (newLocale) => {
  setLocaleCookie(newLocale);
});

</script>

<template>
  <div id="app">
    <select v-model="locale">
      <option value="zh-TW">zh-TW</option>
      <option value="en-US">en-US</option>
      <option value="ja-JP">ja-JP</option>
    </select>

    <ul>
      <li>{{ $t('cancel') }}</li>
      <li>{{ $t('email') }}</li>
      <li>{{ $t('date') }}</li>
      <li>{{ $t('subject') }}</li>
      <li>{{ $t('message') }}</li>
      <li>{{ $t('upload') }}</li>
    </ul>
  </div>
</template>