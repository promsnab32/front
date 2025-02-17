<template>
  <div>
    <HomeHero />
    <HomeCatalog :catalog-list="catalogList" />
  </div>
</template>

<script lang="ts" setup>
import { useCustomFetch } from '#imports'
import type { CatalogDTO, ResponseDTO } from '~/types/app'
import { apiCatalog } from '~~/utils/apiUrls'
definePageMeta({
  layout: 'main',
})
const { data } = await useAsyncData<ResponseDTO<CatalogDTO[]>>('catalog', () =>
  useCustomFetch<'', ResponseDTO<CatalogDTO[]>>(apiCatalog)
)
const catalogList = computed(() => data.value?.data || ([] as CatalogDTO[]))
</script>

<style></style>
