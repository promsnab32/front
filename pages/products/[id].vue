<script lang="ts" setup>
import { ref } from 'vue'
import type { ProductDTO, ResponseDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string
const totalPages = ref<number>(1)
const currentPage = ref<number>(1)
const pageSize = 10
const productList = ref<ProductDTO[]>([])

productList.value = await useLoadData<'', ProductDTO[]>(apiProducts, {
  query: {
    'filters[category][documentId]': id,
    'pagination[page]': currentPage.value,
    'pagination[pageSize]': pageSize,
  },
}).then((data) => {
  totalPages.value = data.value?.meta.pagination.pageCount as number
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
          'pagination[pageSize]': pageSize,
        },
      }
    )
    currentPage.value = response.meta.pagination.page
    productList.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ productList?.[0].category.title }}</h1>
      <div class="table__wrapper">
        <CatalogMain :listCatalog="productList || []" />
        <CommonPagination
          :totalPages="totalPages"
          :currentPage="currentPage"
          @page-change="changePage"
        />
      </div>
    </div>
  </section>

  <NuxtPage />
</template>

<style lang="scss" scoped>
.table__wrapper {
  padding: 31px 0;
}
</style>
