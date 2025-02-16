<template>
  <div>
    <HomeHero />
    <HomeCatalog />
    <button @click="handleCLick">click</button>
  </div>
</template>

<script lang="ts" setup>
import { useServerFetch } from '~/composables/useServerFetch'
import { apiCatalog } from '~~/utils/apiUrls'
definePageMeta({
  layout: 'main',
})

const handleCLick = async () => {
  const { data } = await useServerFetch(apiCatalog)
  console.log(data.value)
}
</script>

<style></style>
