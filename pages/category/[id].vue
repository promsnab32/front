<script lang="ts" setup>
import { useCustomFetch } from '#imports'
import type { CatalogDTO, ResponseDTO } from '~/types/app'
import { apiCatalog } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const { data } = await useAsyncData<ResponseDTO<CatalogDTO>>('category', () =>
  useCustomFetch<'', ResponseDTO<CatalogDTO>>(`${apiCatalog}/${id}`)
)

const categoryList = computed(() => data.value?.data || ({} as CatalogDTO))
console.log(categoryList.value)
</script>

<template>
  <div v-for="(item, index) in categoryList.categories" :key="index">
    <NuxtLink :to="`products/${item.documentId}`">
      <h2>{{ item.title }}</h2>
    </NuxtLink>
  </div>

  <NuxtPage />
</template>

<style lang="scss" scoped></style>
