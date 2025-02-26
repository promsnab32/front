<script lang="ts" setup>
import { ref } from 'vue'
import type { CategoryDTO, ResponseDTO } from '~/types/app'
import { apiCategories } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string
const totalPages = ref<number>(0)
const currentPage = ref<number>(1)
const pageSize = 10

const categoryItem = await useLoadData<CategoryDTO>(`${apiCategories}/${id}`)

const loadCategoryData = async () => {
  console.log('Loading category data, currentPage:', currentPage.value)
}

const changePage = async (page: number) => {
  currentPage.value = page
  await loadCategoryData()
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ categoryItem?.title }}</h1>
      <div class="table__wrapper">
        <CategoryMain :category-item="categoryItem || ({} as CategoryDTO)" />
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
