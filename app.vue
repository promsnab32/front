<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const configStore = useConfigStore()
await useAsyncData('config', () => configStore.getEnv())
</script>
<style lang="scss"></style>
