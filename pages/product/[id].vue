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
useHead({
  title: product.value?.title,
  link: [
    {
      rel: 'canonical',
      href: `http://213.226.124.210${route.path}`,
    },
  ],
  meta: [
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `http://213.226.124.210${route.path}`,
    },
    {
      hid: 'description',
      name: 'description',
      content: product.value?.description,
    },
    {
      hid: 'title',
      name: 'title',
      content: product.value?.title,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: product.value?.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: product.value?.description,
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.value?.title,
        description: product.value?.description,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'RUB',
          availability: product.value?.availability,
        },
      }),
    },
  ],
})
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
