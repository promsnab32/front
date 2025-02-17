<script lang="ts" setup>
import { useCustomFetch } from '#imports'
import type { ProductDTO, ResponseDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const { data } = await useAsyncData<ResponseDTO<ProductDTO>>('category', () =>
  useCustomFetch<'', ResponseDTO<ProductDTO>>(`${apiProducts}/${id}`)
)

const product = computed(() => data.value?.data || ({} as ProductDTO))
</script>

<template>
  <div>
    <h2>{{ product.title }}</h2>
    <h2>{{ product.article }}</h2>
  </div>

  <NuxtPage />
</template>

<style lang="scss" scoped></style>
