<script lang="ts" setup>
import { ref } from 'vue'
import type { ProductDTO, ResponseDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string
const totalProducts = ref<number>(1)
const currentPage = ref<number>(1)
const pageSize = ref(30)
const productList = ref<ProductDTO[]>([])

productList.value = await useLoadData<'', ProductDTO[]>(apiProducts, {
  query: {
    'filters[category][documentId]': id,
    'pagination[page]': currentPage.value,
    'pagination[pageSize]': pageSize.value,
  },
}).then((data) => {
  totalProducts.value = data.value?.meta.pagination.total as number
  return (data.value && data.value.data) || []
})

const changePage = async (page: number) => {
  currentPage.value = page
  try {
    const response = await useCustomFetch<'', ResponseDTO<ProductDTO[]>>(
      apiProducts,
      {
        query: {
          'filters[category][documentId]': id,
          'pagination[page]': currentPage.value,
          'pagination[pageSize]': pageSize.value,
        },
      }
    )
    currentPage.value = response.meta.pagination.page
    productList.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

const getBradCrumbs = () => {
  const data = [
    {
      title: productList.value?.[0].catalog.title,
      documentId: productList.value?.[0].catalog.documentId,
    },
    {
      title: productList.value?.[0].category.title,
      documentId: productList.value?.[0].category.documentId,
    },
  ]
  return data
}
</script>

<template>
  <section class="section">
    <div class="container">
      <CommonBreadCrumbs :crumbs="getBradCrumbs()" />
      <h1 class="title">{{ productList?.[0].category.title }}</h1>
      <div class="table__wrapper">
        <CatalogMain :listCatalog="productList || []" />
        <CommonPagination
          :totalPages="totalProducts"
          :currentPage="currentPage"
          @page-change="changePage"
          @rows-change="(e) => (pageSize = e)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.table__wrapper {
  padding: 31px 0;
}
</style>
