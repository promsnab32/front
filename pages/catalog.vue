<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CatalogDTO } from '~/types/app'

const catalogList = await useLoadData<CatalogDTO[]>(apiCatalog)
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title section__title">Каталог</h1>
      <CatalogList :catalog-list="catalogList || []" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section__title {
  margin-bottom: 31px;
}
</style>
