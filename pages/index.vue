<template>
  <div>
    <HomeHero />
    <HomeCatalog />
    <button @click="handleCLick">click</button>
  </div>
</template>

<script lang="ts" setup>
import { useServerFetch } from '~/composables/useServerFetch'
definePageMeta({
  layout: 'main',
})

const handleCLick = async () => {
  const { data } = await useServerFetch(
    '/sub-categories/hedh2y3oqifgd1osip4mtf89'
  )
  console.log(data.value)
}
</script>

<style></style>
