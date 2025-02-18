<template>
  <div>
    <HomeHero />
    <HomeCatalog :catalog-list="catalogList || []" />
  </div>
</template>

<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CatalogDTO } from '~/types/app'
definePageMeta({
  layout: 'main',
})

const catalogList = await useLoadData<CatalogDTO[]>(apiCatalog)
</script>

<style></style>
