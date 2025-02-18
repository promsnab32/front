<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CategoryDTO } from '~/types/app'
import { apiCategories } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const categoryItem = await useLoadData<CategoryDTO>(`${apiCategories}/${id}`)
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ categoryItem?.title }}</h1>
      <div class="table__wrapper">
        <CategoryMain :category-item="categoryItem || ({} as CategoryDTO)" />
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
