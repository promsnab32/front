<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { ProductDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const product = await useLoadData<ProductDTO>(`${apiProducts}/${id}`)
</script>

<template>
  <div>
    <h2>{{ product?.title }}</h2>
    <h2>{{ product?.article }}</h2>
  </div>

  <NuxtPage />
</template>

<style lang="scss" scoped></style>
