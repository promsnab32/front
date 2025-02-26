<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { ProductDTO, ResponseDTO } from '~/types/app'
import { apiProducts } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string
const currentPage = ref(1)
const totalPages = ref(1)
const productList = ref<ProductDTO[]>([])

productList.value = await useLoadData<'', ProductDTO[]>(apiProducts, {
  query: {
    'filters[catalog][documentId]': id,
    'pagination[page]': currentPage.value,
    'pagination[pageSize]': 10,
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
          'filters[catalog][documentId]': id,
          'pagination[page]': currentPage.value,
          'pagination[pageSize]': 10,
        },
      }
    )
    productList.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ productList?.[0].catalog.title }}</h1>
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
</template>
<style lang="scss" scoped>
.table__wrapper {
  padding: 31px 0;
}
</style>
