<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { ProductDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string
const product = ref<ProductDTO | null>(null)

product.value = await useLoadData<'', ProductDTO>(`${apiProducts}/${id}`).then(
  (data) => {
    return data?.value?.data ?? null
  }
)
const getBradCrumbs = () => {
  const data = [
    {
      title: product.value?.catalog.title,
      documentId: product.value?.catalog.documentId,
    },
    {
      title: (product.value?.category && product.value?.category.title) || null,
      documentId:
        (product.value?.category && product.value?.category.documentId) || null,
    },
    {
      title: product.value?.title,
      documentId: product.value?.documentId,
    },
  ]
  return data
}
</script>

<template>
  <section class="section">
    <div class="container">
      <CommonBreadCrumbs :crumbs="getBradCrumbs()" />
      <ProductItem :product="product" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
