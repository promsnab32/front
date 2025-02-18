<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CatalogDTO } from '~/types/app'
import { apiCatalog } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const categoryItem = await useLoadData<CatalogDTO>(`${apiCatalog}/${id}`)
</script>

<template>
  <CategoryMain :categoty-item="categoryItem || ({} as CatalogDTO)" />

  <NuxtPage />
</template>

<style lang="scss" scoped></style>
