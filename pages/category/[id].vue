<script lang="ts" setup>
import { useLoadData } from '#imports'
import { apiCatalog } from '~~/utils/apiUrls'
import type { CatalogDTO } from '~/types/app'
const route = useRoute()
const id = route.params.id as string

const data = await useLoadData<CatalogDTO>(`${apiCatalog}/${id}`)

const catalogItem = computed(() => data.value)
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ catalogItem?.title }}</h1>
      <div class="table__wrapper">
        <CatalogMain :listCatalog="catalogItem || ({} as CatalogDTO)" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.table__wrapper {
  padding: 31px 0;
}
</style>
