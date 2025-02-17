<script lang="ts" setup>
import { useCustomFetch } from '#imports'
import type { CategoryDTO, ResponseDTO } from '~/types/app'
import { apiCategories } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const { data } = await useAsyncData<ResponseDTO<CategoryDTO>>('category', () =>
  useCustomFetch<'', ResponseDTO<CategoryDTO>>(`${apiCategories}/${id}`)
)

const categoryList = computed(() => data.value?.data || ({} as CategoryDTO))
console.log(categoryList.value)
</script>

<template>
  <div v-for="(item, index) in categoryList.products" :key="index">
    <NuxtLink :to="`product/${item.documentId}`">
      <h2>{{ item.title }}</h2>
    </NuxtLink>
  </div>

  <NuxtPage />
</template>

<style lang="scss" scoped></style>
